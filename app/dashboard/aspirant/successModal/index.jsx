import React from 'react';

const SuccessModal = ({ name, handleModalClose }) => {
  const closeModal = () => {
    handleModalClose();
  };
  return (
    <section className=" px-4 md:px-10 text-sm uppercase text-center">
      <h4>Successful</h4>
      <div className="text-gray-700 text-center my-6">
        You have successfully casted your vote for
        <p>
          <span className="font-semibold"> {name}</span>
        </p>
      </div>

      <section className="">
        <p
          onClick={closeModal}
          type="submit"
          className="w-1/3 mx-auto bg-sectify text-white py-3 rounded-md capitalize my-6 text-center cursor-pointer"
        >
          Continue
        </p>
      </section>
    </section>
  );
};

export default SuccessModal;
