import MessageListItem from '../components/MessageListItem';
import { useState } from 'react';
import { Equipe, getEquipes } from '../data/equipe';
import {
  IonContent,
  IonHeader,
  IonList,
  IonPage,
  IonRefresher,
  IonRefresherContent,
  IonTitle,
  IonToolbar,
  useIonViewWillEnter
} from '@ionic/react';
import './Home.css';

const Home: React.FC = () => {

  const [equipes, setEquipes] = useState<Equipe[]>([]);

  useIonViewWillEnter(() => {
    const eqps = getEquipes();
    setEquipes(eqps);
  });

  const refresh = (e: CustomEvent) => {
    setTimeout(() => {
      e.detail.complete();
    }, 3000);
  };

  return (
    <IonPage id="home-page">
      <IonHeader>
        <IonToolbar>
          <IonTitle>Statistique par equipe</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonRefresher slot="fixed" onIonRefresh={refresh}>
          <IonRefresherContent></IonRefresherContent>
        </IonRefresher>

        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">
              Statistique par equipes
            </IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonList>
          {equipes.map(m => <MessageListItem key={m.idequipe} equipe={m} />)}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Home;
