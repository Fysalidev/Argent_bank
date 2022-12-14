import React from "react";
import PropTypes from "prop-types";

/**
 * AccountCard
 * @param {object} props
 * @param { string } props.title - Account title
 * @param { string } props.amount - Account amount
 * @param { string } props.description - Account description
 * @returns { JSX.Element } AccountCard component
 */

function AccountCard({ title, amount, description }) {
  return (
    <section className="account">
      <div className="account-content-wrapper">
        <h3 className="account-title">{title}</h3>
        <p className="account-amount">{amount} </p>
        <p className="account-amount-description">{description}</p>
      </div>
      <div className="account-content-wrapper cta">
        <button className="transaction-button">View transactions</button>
      </div>
    </section>
  );
}

AccountCard.propTypes = {
  title: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default AccountCard;
