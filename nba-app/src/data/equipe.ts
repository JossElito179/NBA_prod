export interface Equipe {
  idequipe: number;
  nom: string;
}

const equipes: Equipe[] = [
  {
    idequipe:1,
    nom:'PHOENIX'
  }
];

export const getEquipes = () => equipes;

export const getEquipe = (id: number) => equipes.find(m => m.idequipe === id);
