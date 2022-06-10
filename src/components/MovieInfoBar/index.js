import React from "react";
import PropTypes from "prop-types";
//Helpers
import { calcTime, convertMoney } from "../../helpers";
//Styles
import { Wrapper, Content } from "./MovieInfoBar.styles";

const MovieInfoBar = ({ time, budget, revenue }) => (
  <Wrapper>
    <Content>
      <div className="column">
        <h3>Running Time: {calcTime(time)}</h3>
      </div>
      <div className="column">
        <h3>Budget: {convertMoney(budget)}</h3>
      </div>
      <div className="column">
        <h3>Revenue: {convertMoney(revenue)}</h3>
      </div>
    </Content>
  </Wrapper>
);

MovieInfoBar.propTypes = {
  time: PropTypes.number,
  budget: PropTypes.number,
  revenue: PropTypes.number,
};

export default MovieInfoBar;
