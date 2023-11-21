import {
  IonItem,
  IonLabel,
  IonNote
  } from '@ionic/react';
import { Equipe } from '../data/equipe';
import './MessageListItem.css';

interface MessageListItemProps {
  equipe: Equipe;
}

const MessageListItem: React.FC<MessageListItemProps> = ({ equipe }) => {
  return (
    <IonItem routerLink={`/message/${equipe.idequipe}`} detail={false}>
      <div slot="start" className="dot dot-unread"></div>
      <IonLabel className="ion-text-wrap">
        <h2>
          {equipe.nom}
        </h2>
      </IonLabel>
    </IonItem>
  );
};

export default MessageListItem;
