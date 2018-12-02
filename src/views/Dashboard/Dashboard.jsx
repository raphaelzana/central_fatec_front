import React, { Component } from "react";
import { Grid, Row, Col } from "react-bootstrap";

import { Card } from "components/Card/Card.jsx";
import { StatsCard } from "components/StatsCard/StatsCard.jsx";
import { Tasks } from "components/Tasks/Tasks.jsx";
import { News } from "components/News/News.jsx";
import Paginator from "components/Pagination/Pagination.jsx";

class Dashboard extends Component {
  createLegend(json) {
    var legend = [];
    for (var i = 0; i < json["names"].length; i++) {
      var type = "fa fa-circle text-" + json["types"][i];
      legend.push(<i className={type} key={i} />);
      legend.push(" ");
      legend.push(json["names"][i]);
    }
    return legend;
  }
  render() {
    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Col lg={3} sm={6}>
              <StatsCard
                bigIcon={<i className="fa fa-map-marker text-warning" />}
                statsText="Mapa de Aulas"
                statsValue="Agora"
                statsIcon={<i className="fa fa-refresh" />}
                statsIconText="Acessar"
              />
            </Col>
            <Col lg={3} sm={6}>
              <StatsCard
                bigIcon={<i className="pe-7s-wallet text-success" />}
                statsText="Reservar Projetores"
                statsValue=""
                statsIcon={<i className="fa fa-refresh" />}
                statsIconText="Verificar projetores"
              />
            </Col>
            <Col lg={3} sm={6}>
              <StatsCard
                bigIcon={<i className="fa fa-eye text-danger" />}
                statsText="Achados / Perdidos"
                statsValue=""
                statsIcon={<i className="fa fa-refresh" />}
                statsIconText="Verificar itens"
              />
            </Col>
            <Col lg={3} sm={6}>
              <StatsCard
                bigIcon={<i className="fa fa-comments text-default" />}
                statsText="Notícias / Interações"
                statsValue=""
                statsIcon={<i className="fa fa-refresh" />}
                statsIconText="Ir para notícias e interações"
              />
            </Col>
          </Row>
          

          <Row>
            <Col md={6}>
              <Card
                title="Notícias"
                category="O que foi achado em nosso campus"
                stats="Atualizado 3 atrás"
                statsIcon="fa fa-history"
                content={
                  <div>
                    <div className="table-full-width">
                      <table className="table">
                        <News />
                      </table>
                    </div>
                    <Paginator itens={[1, 2, 3]} />
                  </div>
                }
              />
            </Col>
            <Col md={6}>
              <Card
                title="Achados e Perdidos"
                category="O que foi achado em nosso campus"
                stats="Atualizado 3 atrás"
                statsIcon="fa fa-history"
                content={
                  <div className="table-full-width">
                    <table className="table">
                      <Tasks />
                    </table>
                  </div>
                }
              />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default Dashboard;
