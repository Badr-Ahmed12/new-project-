import Image from 'next/image';

const Services = () => {

  const serviceContent = [
    {
      title: 'Branding',
      icon: '/assets/images/service/branding.svg',
      service1: 'Logo Design',
      service2: 'Visual Identity',
      service3: 'Brand Guidelines',
      img: '/assets/images/service/service-branding.jpg',
      addclass: 'service-title'
    },
    {
      title: 'Digital Marketing Design',
      icon: '/assets/images/service/digital-marketing.svg',
      service1: 'Social Media Content',
      service2: 'Ads Design',
      service3: '',
      img: '/assets/images/service/service-digital-marketing.jpg',
      addclass: 'service-title mr-25'
    },
    {
      title: 'Packaging Design',
      icon: '/assets/images/service/packaging.svg',
      service1: 'Packaging Design',
      service2: '',
      service3: '',
      img: '/assets/images/service/service-packaging.jpg',
      addclass: 'service-title mr-5'
    },
    {
      title: 'General Graphic Design',
      icon: '/assets/images/service/graphic-design.svg',
      service1: 'Print',
      service2: 'Digital',
      service3: '',
      img: '/assets/images/service/service-graphic.jpg',
      addclass: 'service-title mr-75'
    },
  ];

  return (
    <section className="service-area style-three space">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="title-upper_area" style={{ textAlign: 'center' }}>
              <span className="title">(  Discover What We Offer  )</span>
              <div className="right">
                <span className="title">( SERVICES ALL  )</span>
                <div className="title-info_text mt-50 md-mt-30 sm-mt-10">
                  <h3 style={{ fontSize: 50, textAlign: 'center' }}>
                    I offer a wide range of design services, including:
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-12">
            <div className="service-item-wrapper">
              {serviceContent.map((item, i) => (
                <div key={i} className="service-item hover-reveal-item">
                  <div className="service-inner">
                    <div className="service-left" style={{ textAlign: 'center' }}>
                      <div className="service-icon">
                        <Image src={item.icon} alt="icon" width={70} height={70} />
                      </div>
                      <h3 className={item.addclass} dangerouslySetInnerHTML={{ __html: item.title }} style={{ textAlign: 'center' }} />
                      <ul className="service-list" style={{ textAlign: 'center', listStyle: 'none', padding: 0 }}>
                        {item.service1 && <li>+ {item.service1}</li>}
                        {item.service2 && <li>+ {item.service2}</li>}
                        {item.service3 && <li>+ {item.service3}</li>}
                      </ul>
                    </div>
                  </div>
                  <div 
                    className="hover-reveal-bg" 
                    style={{ 
                      backgroundImage: `url(${item.img})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center'
                    }} 
                  ></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
