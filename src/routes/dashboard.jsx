import Dashboard from "views/Dashboard/Dashboard";
import Noticias from "../views/Noticias/Noticias";
import Salas from "../views/Salas/Salas";
import AchadosPerdidos from "../views/AchadosPerdidos/AchadosPerdidos";

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Tela principal",
    title: "Estatísticas de utilização do sistema",
    icon: "pe-7s-graph",
    component: Dashboard
  },
  {
    path: "/noticias",
    name: "Noticias",
    title: "Cadastros de noticias da faculdade",
    icon: "pe-7s-note2",
    component: Noticias
  },
  {
    path: "/achados",
    name: "Achados e Perdidos",
    title: "Cadastros de objetos achados e perdidos na faculdade",
    icon: "pe-7s-search",
    component: AchadosPerdidos
  },
  {
    path: "/salas",
    name: "Mapa de Salas",
    title: "Busca de sala de aula de um curso",
    icon: "pe-7s-map",
    component: Salas
  }
];

export default dashboardRoutes;
