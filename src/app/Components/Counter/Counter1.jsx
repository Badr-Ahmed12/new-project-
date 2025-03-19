const Counter1 = () => {
    const counterContent = [
      { number: "230", position: "Project Completed" },
      { number: "4k", position: "Happy Clients" },
      { number: "15", position: "Years of Experience" },
      { number: "97", position: "Clients Satisfaction" },
    ];
  
    return (
      <div className="counter-area bg-theme2">
        <div className="container">
          <div className="row counter-wrap gy-40 align-items-center justify-content-lg-between justify-content-center">
            {counterContent.map((item, i) => (
              <div key={i} className="col-xl-auto col-lg-3 col-md-3 col-sm-6">
                <div className="counter-box">
                  <h3 className="counter-box_number text-white">
                    <span className="count-number">{item.number}</span>+
                  </h3>
                  <h4 className="counter-box_title text-white">{item.position}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default Counter1;
  