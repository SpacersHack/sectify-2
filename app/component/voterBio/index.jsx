import Button from '../button';

const voter = {
  name: 'JOHN DOE IFEDOLA',
  vin: '54F7 C4C9 3737 8896 432',
  dob: '12-03-1980',
  occupation: 'Graphic designer',
  address: '4140 Parker Rd. Allentown, New Mexico ',
};

const VoterBio = () => {
  return (
    <section className="bg-white rounded-lg py-6 px-6 my-6">
      <h4 className="mb-4">Voters information</h4>
      <div className="flex items-center justify-between">
        <aside className="bg-green-500 w-1/6 h-40 rounded-full mr-4"></aside>
        <aside className="flex justify-between w-full">
          <div>
            <p className="flex items-start my-3">
              <span className="inline-block mr-4 text-sm">Name :</span>
              <span className="text-sm capitalize text-right ">
                {voter.name}
              </span>
            </p>
            <p className="flex items-start my-3">
              <span className="inline-block mr-4 text-sm">VIN :</span>
              <span className="text-sm text-right ">{voter.vin}</span>
            </p>
            <p className="flex items-start my-3">
              <span className="inline-block mr-4 text-sm">D.O.B :</span>
              <span className="text-sm text-right ">{voter.dob}</span>
            </p>
            <p className="flex items-start my-3">
              <span className="inline-block mr-4 text-sm">OCCUPATION :</span>
              <span className="text-sm text-right ">{voter.occupation}</span>
            </p>
            <p className="flex items-start my-3">
              <span className="inline-block mr-4 text-sm">ADDRESS :</span>
              <span className="text-sm text-right ">{voter.address}</span>
            </p>
          </div>
          <div className="flex flex-col justify-between">
            <p className="flex items-start my-3">
              <span className="inline-block mr-4 text-sm">DELIM :</span>
              <span className="text-sm">
                LAGOS | ALIMOSHO <br />
                (ABULE-EGBA/ABORU/MEIRAN/ ALAGBADO)
              </span>
            </p>
            <div className="flex justify-end my-3">
              <Button href={''}>
                <p>Start Voting</p>
              </Button>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
};

export default VoterBio;
