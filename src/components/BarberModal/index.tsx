import React, {useCallback} from 'react';
import {useNavigation} from '@react-navigation/native';

import IBarber from '../../interfaces/Barber';
import colors from '../../utils/colors';

import ExpandIcon from '../../assets/expand.svg';

import {
  Modal,
  ModalArea,
  ModalBody,
  CloseButton,
  ModalItem,
  BarberInfo,
  BarberAvatar,
  BarberName,
  ServiceInfo,
  ServiceName,
  ServicePrice,
  FinishBtn,
  FinishBtnText,
} from './styles';

interface BarberModalProps {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  barber: IBarber;
  service: number | null;
}

const BarberModal: React.FC<BarberModalProps> = ({
  show,
  setShow,
  barber,
  service,
}) => {
  const navigation = useNavigation();

  const handleCloseButton = useCallback(() => {
    setShow(false);
  }, [setShow]);

  const handleFinishClick = useCallback(() => {
    console.log('test');
  }, []);

  return (
    <Modal transparent={true} visible={show} animationType="slide">
      <ModalArea>
        <ModalBody>
          <CloseButton onPress={handleCloseButton}>
            <ExpandIcon width="40" height="40" fill={colors.black} />
          </CloseButton>

          <ModalItem>
            <BarberInfo>
              <BarberAvatar source={{uri: barber.avatar}} />
              <BarberName>{barber.name}</BarberName>
            </BarberInfo>
          </ModalItem>

          {typeof service === 'number' && barber.services && (
            <ModalItem>
              <ServiceInfo>
                <ServiceName>{barber.services[service].name}</ServiceName>
                <ServicePrice>
                  R$ {barber.services[service].price.toFixed(2)}
                </ServicePrice>
              </ServiceInfo>
            </ModalItem>
          )}

          <FinishBtn onPress={handleFinishClick}>
            <FinishBtnText>Finalizar Agendamento</FinishBtnText>
          </FinishBtn>
        </ModalBody>
      </ModalArea>
    </Modal>
  );
};

export default BarberModal;