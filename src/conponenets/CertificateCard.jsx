function CertificateCard({ certificate }) {

  return (

    <div className="bg-gray-800 rounded-2xl overflow-hidden border border-gray-700 hover:border-blue-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300">

      <img
        src={certificate.image}
        alt={certificate.title}
        className="w-full h-56 object-cover"
      />

      <div className="p-6">

        <h3 className="text-xl font-bold">

          {certificate.title}

        </h3>

        <p className="text-blue-400 mt-2">

          {certificate.issuer}

        </p>

        <p className="text-gray-400 mt-2">

          📅 {certificate.date}

        </p>

        <p className="text-gray-400">

          ⏱ {certificate.duration}

        </p>

        <a
          href={certificate.link}
          target="_blank"
          rel="noreferrer"
          className="inline-block mt-6 bg-blue-500 hover:bg-blue-600 px-5 py-2 rounded-lg transition duration-300"
        >
          View Certificate
        </a>

      </div>

    </div>

  );
}

export default CertificateCard;