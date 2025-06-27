const FormButtons = ({ currentTab, closeModal, onNext, onBack, isDisabled, isSubmitted }) => {
  return (
    <div className="flex justify-between mt-6">
      {currentTab === 0 && (
        <>
          <button
            type="button"
            onClick={closeModal}
            className="text-md text-primary font-semibold"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={onNext}
            className={`px-4 py-2 rounded ${isDisabled ? "bg-gray-300" : "bg-primary text-white"}`}
            disabled={isDisabled}
          >
            Continue
          </button>
        </>
      )}

      {currentTab === 1 && (
        <>
          <button
            type="button"
            onClick={onBack}
            className="text-md text-primary font-semibold"
          >
            Back
          </button>
          <button
            type="button"
            onClick={onNext}
            className={`px-4 py-2 rounded ${isDisabled ? "bg-gray-300" : "bg-primary text-white"}`}
            disabled={isDisabled}
          >
            Continue
          </button>
        </>
      )}

      {currentTab === 2 && (
        <>
          <button
            type="button"
            onClick={onBack}
            className="text-md text-primary font-semibold"
          >
            Back
          </button>
          <button
            type="submit"
            className={`px-4 py-2 rounded ${isSubmitted ? "bg-gray-300" : "bg-white text-primary border border-primary"}`}
            disabled={isSubmitted}
          >
            {isSubmitted ? "Submitting..." : "Submit"}
          </button>
        </>
      )}
    </div>
  );
};

export default FormButtons;