import React from "react";

export default function Dashboard() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-3">
          <div className="card bg-primary text-white">
            <div className="card-body">
              <h5 className="card-title">26 New Messages!</h5>
              <hr />
              <button type="button" className="btn btn-white">
                View Detail →
              </button>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card bg-warning text-white">
            <div className="card-body">
              <h5 className="card-title">11 New Tasks!</h5>
              <hr />
              <button type="button" className="btn btn-white">
                View Detail →
              </button>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card bg-success text-white">
            <div className="card-body">
              <h5 className="card-title">123 New Orders!</h5>
              <hr />
              <button type="button" className="btn btn-white">
                View Detail →
              </button>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card bg-danger text-white">
            <div className="card-body">
              <h5 className="card-title">13 New Tickets!</h5>
              <hr />
              <button type="button" className="btn btn-white">
                View Detail →
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
