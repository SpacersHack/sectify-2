import React from 'react';

const ConfirmModal = ({ name, handleModalClose }) => {
  const handleVote = () => {};

  const closeModal = () => {
    handleModalClose();
  };
  return (
    <section className="px-10 text-sm uppercase text-center">
      <h4>Notice</h4>
      <p className="text-gray-700 text-center my-6">
        You can vote for just one aspirant in this division. Is{' '}
        <span className="font-semibold">{name}</span> your preferred Aspirant?
      </p>

      <section className="flex justify-between items-center gap-3">
        <p
          onClick={closeModal}
          type="submit"
          className="w-2/3 border-sectify border-2 text-sectify py-3 rounded-md capitalize my-6 text-center cursor-pointer"
        >
          Cancel
        </p>
        <p
          onClick={handleVote}
          type="submit"
          className="w-2/3 bg-sectify text-white py-3 rounded-md capitalize my-6 text-center cursor-pointer"
        >
          Proceed
        </p>
      </section>
    </section>
  );
};

export default ConfirmModal;
