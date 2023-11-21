export interface Stats{
    idstats:number;
    idequipe:number;
    nomjoueur:string;
    m:number;
    mj:number;
    ppm:number;
    rpm:number;
    pdpm:number;
    mpm:number;
    eff:number;
    fg:number;
    troisp:number;
    lf:number;
}

const stats: Stats[] = [
    {
        idstats:1,
        idequipe:1,
        nomjoueur:'booker',
        m:13,
        mj:7,
        ppm:29.9,
        rpm:4.5,
        pdpm:5.6,
        mpm:15,
        eff:27,
        fg:30.4,
        troisp:50,
        lf:60
    },
    {
        idstats:1,
        idequipe:1,
        nomjoueur:'booker',
        m:13,
        mj:7,
        ppm:29.9,
        rpm:4.5,
        pdpm:5.6,
        mpm:15,
        eff:27,
        fg:30.4,
        troisp:50,
        lf:60
    },
    {
        idstats:1,
        idequipe:1,
        nomjoueur:'booker',
        m:13,
        mj:7,
        ppm:29.9,
        rpm:4.5,
        pdpm:5.6,
        mpm:15,
        eff:27,
        fg:30.4,
        troisp:50,
        lf:60
    }

  ];
  
  export const getStats = () => stats;
  
  export const getStat = (id: number) => {
    return stats.filter((m: Stats) => m.idequipe === id);
  };
  