const Card = () => {

  return (
    <div className="container mt-4">
      <div className="row g-4">
        {/* primera card */}
        <div className="col-12 col-sm-6 col-md-3">

          <div className="card" style={{ width: '18rem' }}>
            <img src="https://driverevel.com/_next/image?url=https%3A%2F%2Frevel-car-models.s3.eu-west-1.amazonaws.com%2Fpro%2F65145d3ea8026ec0d893da7b%2F%25233e3d3d%2F1695921630449.jpg&w=1200&q=100" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Jeep</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
              <a href="#" className="btn btn-primary">Solicita tu Oferta</a>
            </div>
          </div>
        </div>

        {/* segunda card */}
        <div className="col-12 col-sm-6 col-md-3">

          <div className="card" style={{ width: '18rem' }}>
            <img src="https://driverevel.com/_next/image?url=https%3A%2F%2Frevel-car-models.s3.eu-west-1.amazonaws.com%2Fpro%2F66e98017ad0bac0de9b19cbe%2F%252354534f%2F1741944898296.jpg&w=1200&q=100" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Mercedes Benz</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
              <a href="#" className="btn btn-primary">Solicita tu Oferta</a>
            </div>
          </div>
        </div>

        {/* tercera card */}
        <div className="col-12 col-sm-6 col-md-3">

          <div className="card" style={{ width: '18rem' }}>
            <img src="https://driverevel.com/_next/image?url=https%3A%2F%2Frevel-car-models.s3.eu-west-1.amazonaws.com%2Fpro%2F67c5a8ab80de03421c670211%2F%2523fafafa%2F1744372630640.jpg&w=1200&q=100" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Mazda</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
              <a href="#" className="btn btn-primary">Solicita tu Oferta</a>
            </div>
          </div>
        </div>

        {/* cuarta card */}
        <div className="col-12 col-sm-6 col-md-3">
          <div className="card" style={{ width: '18rem' }}>
            <img src="https://driverevel.com/_next/image?url=https%3A%2F%2Frevel-car-models.s3.eu-west-1.amazonaws.com%2Fpro%2F6823588fe7cf53f4301bd640%2F%2523373938%2F1747147021784.jpg&w=1200&q=100" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Cupra</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
              <a href="#" className="btn btn-primary">Solicita tu Oferta</a>
            </div>
          </div>
        </div>
      </div>
    </div>

  )

}

export default Card;
