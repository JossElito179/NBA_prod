import { useState } from 'react';
import { Equipe, getEquipe } from '../data/equipe';
import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonNote,
  IonPage,
  IonToolbar,
  useIonViewWillEnter,
} from '@ionic/react';
import { basketball } from 'ionicons/icons';
import { useParams } from 'react-router';
import './ViewMessage.css';
import { Stats, getStat} from '../data/stats';

function ViewEquipe() {
  const [Equipe, setEquipe] = useState<Equipe>();
  const [statis, setStats] = useState<Stats[]>([]);
  const params = useParams<{ id: string }>();

  useIonViewWillEnter(() => {
    const msg = getEquipe(parseInt(params.id, 10));
    const stats =getStat(parseInt(params.id,3));
    setStats(stats);
    setEquipe(msg);
  });

  return (
    <IonPage id="view-Equipe-page">
      <IonHeader translucent>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton text="Equipes" defaultHref="/home"></IonBackButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        {Equipe ? (
          <>
            <IonItem>
              <IonIcon aria-hidden="true" icon={basketball} color="primary"></IonIcon>
              <IonLabel className="ion-text-wrap">
                <h2> Statisqtiques des {Equipe.nom}</h2>
              </IonLabel>
            </IonItem>

            <div className="ion-padding">
              <h1>{Equipe.nom}</h1>
              <p>
                <div className="table-container">
                <table border={1}>
                  <thead>
                    <tr>
                      <th>Nom joueur</th>
                      <th>M</th>
                      <th>MJ</th>
                      <th>PPM</th>
                      <th>RPM</th>
                      <th>PDPM</th>
                      <th>MPM</th>
                      <th>EFF</th>
                      <th>FG%</th>
                      <th>3P%</th>
                      <th>%LF</th>
                    </tr>
                  </thead>
                  <tbody>
                    {statis.map( statistic => 
                      <>
                      <tr>
                        <td>{statistic.nomjoueur}</td>
                        <td>{statistic.m}</td>
                        <td>{statistic.mj}</td>
                        <td>{statistic.ppm}</td>
                        <td>{statistic.rpm}</td>
                        <td>{statistic.pdpm}</td>
                        <td>{statistic.mpm}</td>
                        <td>{statistic.eff}</td>
                        <td>{statistic.fg}</td>
                        <td>{statistic.troisp}</td>
                        <td>{statistic.lf}</td>
                        </tr>
                      </>
                      )}
                  </tbody>
                </table>
                </div>
              </p>
            </div>
          </>
        ) : (
          <div>Equipe not found</div>
        )}
      </IonContent>
    </IonPage>
  );
}

export default ViewEquipe;
