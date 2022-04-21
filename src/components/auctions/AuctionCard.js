import React, { useContext, useState } from 'react';
import Countdown from 'react-countdown';
import { AuthContext } from '../../context/AuthContext';

const renderer = ({ days, hours, minutes, seconds, completed, props }) => {
  if (completed) {
    return null;
  }

  return (
    <div className="col">
      <div className="card shadow-sm">
        <div
          style={{
            height: '9rem',
            backgroundImage: `url(${props.item.imgUrl})`,
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
          }}
          className="w-100 my-2"
        />

        <div className="card-body">
          <p className="lead display-6">{props.item.title}</p>
          <p className="card-text">{props.item.desc}</p>
          <div className="d-flex jsutify-content-between align-item-center">
            <span>Termina em: </span>
            <h5 className="mx-2">
              {days} days: {hours} hr: {minutes} min: {seconds} sec
            </h5>
          </div>

          <div className="d-flex justify-content-between align-item-center">
            <div>
              {!props.owner ? (
                <div
                  onClick={() => props.bidAuction()}
                  className="btn btn-outline-secondary"
                >
                  Bid
                </div>
              ) : props.owner.email === props.item.email ? (
                <div
                  onClick={() => props.endAuction(props.item.id)}
                  className="btn btn-outline-secondary"
                >
                  Cancel Auction
                </div>
              ) : props.owner.email === props.item.curWinner ? (
                <div className="d-flex">
                  <p className="fs-4">Highest Bidder</p>
                  <p className="mx-5 fs-4">{props.item.curPrice}€</p>
                </div>
              ) : (
                <>
                  <div className="d-flex">
                    <div
                      onClick={() =>
                        props.bidAuction(props.item.id, props.item.curPrice)
                      }
                      className="btn btn-primary"
                    >
                      Bid {props.item.curPrice + props.item.curBid}€
                    </div>
                    <div className="mx-2">
                      <p className="display-6">{props.item.curPrice}€</p>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const AuctionCard = ({ item }) => {
  let expiredDate = item.duration;
  const { currentUser, bidAuction, endAuction } = useContext(AuthContext);

  return (
    <Countdown
      owner={currentUser}
      date={expiredDate}
      bidAuction={bidAuction}
      endAuction={endAuction}
      item={item}
      renderer={renderer}
    />
  );
};
