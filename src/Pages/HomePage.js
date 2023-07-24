import React, { useEffect, useState } from 'react';
import { Button, Spin, Steps, message, Modal } from 'antd';
import DNIForm from '../components/DNIForm/DNIForm';
import AltaForm from '../components/AltaForm/AltaForm';
import ImagesForm from '../components/ImagesForm/ImagesForm';
import { useParams } from 'react-router-dom';
import API from '../lib/api';

const { Step } = Steps;

const HomePage = () => {
  let { dni: dniParam } = useParams();
  const [step, setStep] = useState(0);
  const [dni, setDni] = useState('');
  const [token, setToken] = useState('');
  const [loading, setLoading] = useState(false);
  const [personaLoaded, setPersonaLoaded] = useState(null);
  const [isFormEdition, setIsFormEdition] = useState(false);
  const [numeroTramite, setNumeroTramite] = useState('');

  const handleNext = () => setStep((state) => state + 1);

  const handleCancelar = () => setStep(0);

  const handleFinalizar = () => {
    const modal = Modal.success({
      title: 'Persona cargada con éxito',
      content: `Número de trámite: ${numeroTramite}`,
      okText: 'Cerrar',
      onOk: () => modal.destroy(),
    });
    setStep(0);
  };

  const handleDNI = (value) => setDni(value);

  const handleToken = (value) => setToken(value);

  const handlePersonaLoaded = (value) => {
    if(value?.token) {
      setToken(value.token);
    }
    setPersonaLoaded(value);
  }

  const handleNumeroTramite = (value) => setNumeroTramite(value);

  useEffect(() => {
    if (dniParam) {
      const fetchValues = async () => {
        try {
          setLoading(true);
          const result = await API.get(`/personas/getForm/${dniParam}`);
          const data = result.respuesta[0];
          setToken(data.token);
          setIsFormEdition(true);
          setPersonaLoaded({
            ...data,
            ...data.pedidos[0],
          });
          setStep(1);
          // setLoadedValues(data);
        } catch (error) {
          if (error?.response?.status === 400) {
            message.warning(error.response.data.mensaje);
          } else {
            message.error(error.message);
          }
        } finally {
          setLoading(false);
        }
      };
      fetchValues();
    }
  }, [dniParam]);

  return (
    <div className="max-w-6xl mx-auto my-6 p-2">
      {loading ? (
        <div className="flex justify-center items-center">
          <Spin />
        </div>
      ) : (
        <>
          <Steps current={step}>
            <Step title="Comprobar DNI" />
            <Step title="Cargar Formulario" />
            <Step title="Subir Fotos" />
          </Steps>
          {step === 0 && (
            <DNIForm
              handleNext={handleNext}
              handleDNI={handleDNI}
              handlePersonaLoaded={handlePersonaLoaded}
            />
          )}
          {step === 1 && (
            <AltaForm
              handleNext={handleNext}
              dni={dni}
              isFormEdition={isFormEdition}
              persona={personaLoaded}
              handleToken={handleToken}
              handleNumeroTramite={handleNumeroTramite}
            />
          )}
          {step === 2 && (
            <ImagesForm token={token} fotos={personaLoaded?.fotos} />
          )}
          {step === 1 && <Button onClick={handleCancelar}>Cancelar</Button>}
          {step === 2 && <Button onClick={handleFinalizar}>Finalizar</Button>}
        </>
      )}
    </div>
  );
};

export default HomePage;
