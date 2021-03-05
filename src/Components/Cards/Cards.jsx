import React, { Component } from "react";
import axios from "axios";
import qs from "qs";
import Card from "./Card/Card";
import "./Cards.css";
import history from "./../../Pages/history";

class Cards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stylist: [],
      list: true,
      group: false,
    };
  }

  categ = {};

  componentWillMount() {
    this.getStylist();
    this.groupStylist(this.props.idFromCateg[0]);
  }

  componentDidUpdate() {
    console.log(this.props.idFromCateg[0]);
    this.groupStylist(this.props.idFromCateg[0]);
  }

  getStylist = () => {
    axios
      .get("http://localhost:3000/listEstilista")
      .then((res) => {
        this.setState({
          stylist: res.data,
          list: false,
        });

        console.log(res.data);
        console.log(this.state.stylist.data.length);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  groupStylist = (id_c) => {

    this.categ = {
      id_categ: id_c
    }

    axios
      .post("http://localhost:3000/groupEstilist", qs.stringify(this.categ))
      .then((res) => {
        this.setState({
          stylist: res.data,
          list: false,
        });

        console.log(res.data);
        console.log(this.state.stylist.data.length);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    if (this.state.list) {
      return <h2>cargando</h2>;
    }

    if (this.state.stylist.data.length > 0) {
      const listStylist = this.state.stylist.data.map(
        (stylist, index) => (
          <Card
            key={index}
            type={"Belleza"}
            name={stylist.nomb_et}
            profesion={stylist.titulo_et}
            numStars={stylist.puntaje_et}
            image={stylist.img_et}
            onClick={() => {
              history.push({
                pathname: "/store",
                search: "?query=abc",
                state: { id: stylist.id_t_fk, idS: stylist.id_et },
              });
            }}
          />
        )
      );

      return <div className="o-cards-container">{listStylist}</div>;
    } else {
      return (
        <div className="o-cards-container">
          {
            <Card
              type={"Belleza"}
              name={"Ana Elena"}
              profesion={"Estilista profesional"}
              numStars={2}
              image={
                "https://img.vixdata.io/pd/jpg-large/es/sites/default/files/imj/imujer/6/6-preguntas-que-debes-hacerle-a-tu-estilista-antes-de-que-comience-a-trabajar-1.jpg"
              }
              onClick={() => {
                history.push("/store");
              }}
            />
          }
        </div>
      );
    }
  }
}

export default Cards;
