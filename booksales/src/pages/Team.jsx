import React from 'react';

const Team = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Dani",
      role: "Frontend Developer",
      desc: "Ahli dalam mengubah desain UI menjadi kode React yang interaktif.",
      img: "https://i.pravatar.cc/150?u="
    },
    {
      id: 2,
      name: "Fatwa Makarim",
      role: "UI/UX Designer",
      desc: "Fokus pada pengalaman pengguna dan keindahan visual aplikasi.",
      img: "https://i.pravatar.cc/151?"
    },
    {
      id: 3,
      name: "Rizki Fajar",
      role: "Backend Engineer",
      desc: "Menangani integrasi data dan keamanan server aplikasi BookSale.",
      img: "https://i.pravatar.cc/152?"
    }
  ];

  return (
    <div className="container py-5">
      <div className="text-center mb-5">
        <h2 className="fw-bold">Our Team</h2>
        <p className="text-muted">Orang-orang hebat di balik pengembangan BookSale.</p>
      </div>

      <div className="row g-4">
        {teamMembers.map((member) => (
          <div className="col-md-4" key={member.id}>
            <div className="card h-100 shadow-sm border-0 text-center p-3">
              <img 
                src={member.img} 
                alt={member.name} 
                className="rounded-circle mx-auto mt-3" 
                style={{ width: '100px', height: '100px', objectFit: 'cover' }}
              />
              <div className="card-body">
                <h5 className="card-title fw-bold">{member.name}</h5>
                <h6 className="text-primary mb-3">{member.role}</h6>
                <p className="card-text text-muted small">{member.desc}</p>
                <div className="d-flex justify-content-center gap-2">
                  <button className="btn btn-outline-primary btn-sm">LinkedIn</button>
                  <button className="btn btn-outline-dark btn-sm">GitHub</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;