import { Fragment } from 'react';

const Row = ({transaction}) => {
    return (
        <Fragment>
          <div>
            <div>
              <h5>{transaction.description}</h5>
              <p>{transaction.date}</p>
            </div>

            <div>
              <h5>${transaction.amount}</h5>
            </div>
          </div>
        </Fragment>
    );
}

export default Row;