import React from 'react';

const Team = () => {
  const members = [
    { name: 'Andi Books', role: 'Founder & CEO', img: 'https://i.pravatar.cc/150?u=1' },
    { name: 'Siti Read', role: 'Head Curator', img: 'https://i.pravatar.cc/150?u=2' },
    { name: 'Budi Write', role: 'Logistics Manager', img: 'https://i.pravatar.cc/150?u=3' }
  ];

  return (
    <div className="container py-5">
      <h2 className="text-center mb-5 fw-bold">Tim Kreatif Kami</h2>
      <div className="row">
        {members.map((member, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="card border-0 shadow-sm text-center p-3">
              <img 
                src={member.img} 
                alt={member.name} 
                className="rounded-circle mx-auto d-block mb-3" 
                width="120" 
              />
              <div className="card-body">
                <h5 className="card-title fw-bold">{member.name}</h5>
                <p className="text-primary">{member.role}</p>
                <p className="card-text text-muted small">Dedikasi untuk menghadirkan literatur terbaik bagi Anda.</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;