import React from 'react';
import octicons from 'octicons';

import CopyButton from './copy-button';
import TicketShape from '../utils/ticket-shape';
import fmt from '../utils/format';

const svg = name => ({ __html: octicons[name].toSVG() });

/* eslint-disable jsx-a11y/tabindex-no-positive, react/no-danger */

function TicketListItem(props) {
  const ticket = props.ticket;

  const commit = fmt.commit(ticket);
  const branch = fmt.branch(ticket);
  const command = fmt.command(ticket);

  return (
    <li className="list-group-item list-group-item-tt">
      <div className="container list-group-container">
        <div className="row">
          <div className="col-xs-7">
            <h6 className="list-group-heading">{ticket.title}</h6>
          </div>
          <div className="col-xs-5 text-xs-right">
            <CopyButton
              className="btn btn-primary btn-sm"
              title="Branch name"
              value={branch}
              tabIndex={1}
            >
              <span className="octicon octicon-sm" dangerouslySetInnerHTML={svg('git-branch')} />
            </CopyButton>
            <CopyButton
              className="btn btn-primary btn-sm pq"
              title="Commit message"
              value={commit}
              tabIndex={1}
            >
              <span className="octicon octicon-sm" dangerouslySetInnerHTML={svg('comment')} />
            </CopyButton>
            <CopyButton
              className="btn btn-primary btn-sm pq"
              title="CLI command"
              value={command}
              tabIndex={1}
            >
              <span className="octicon octicon-sm" dangerouslySetInnerHTML={svg('terminal')} />
            </CopyButton>
          </div>
        </div>
      </div>
    </li>
  );
}

/* eslint-enable jsx-a11y/tabindex-no-positive, react/no-danger */

TicketListItem.propTypes = {
  ticket: TicketShape.isRequired
};

function TicketList(props) {
  const item = ticket => (
    <TicketListItem key={ticket.id} ticket={ticket} />
  );

  return (
    <div>
      <ul className="list-group">
        {props.tickets.map(item)}
      </ul>
    </div>
  );
}

TicketList.propTypes = {
  tickets: React.PropTypes.arrayOf(TicketShape).isRequired
};

export { TicketListItem };
export default TicketList;
