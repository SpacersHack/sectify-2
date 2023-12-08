import Button from '../../component/button';
import VoterDetail from './detail';
import Image from 'next/image';
const voter = {
  name: 'JOHN DOE IFEDOLA',
  vin: '54F7 C4C9 3737 8896 432',
  dob: '12-03-1980',
  occupation: 'Graphic designer',
  address: '4140 Parker Rd. Allentown, New Mexico ',
  delim: 'LAGOS | ALIMOSHO',
};

const VoterBio = () => {
  return (
    <section className="bg-white rounded-lg pt-4 md:py-6 px-6 my-6">
      <h4 className="mb-4">Voters information</h4>
      <div className="md:flex items-center justify-between">
        <aside className="h-40 w-40 md:w-40 md:h-40  mr-4 flex justify-center ">
          <div className="w-full h-full bg-green-500 rounded-full overflow-hidden">
            <Image
              alt=""
              height={150}
              width={150}
              src={'/profile.jpg'}
              className="w-full h-full"
            />
          </div>
        </aside>
        <aside className="md:flex justify-between w-full my-10 md:my-0">
          <div>
            <VoterDetail title={'Name'} text={voter.name} />
            <VoterDetail title={'Matric'} text={voter.vin} />
            <VoterDetail title={'D.O.B'} text={voter.dob} />
            <VoterDetail title={'Occupation'} text={voter.occupation} />
            <VoterDetail title={'address'} text={voter.address} />
          </div>
          <div className="flex flex-col justify-between">
            <VoterDetail title={'delim'} text={voter.delim} />

            <div className="md:flex justify-end my-3">
              <Button href={'dashboard/poll'}>
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
