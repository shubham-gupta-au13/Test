import { useState } from "react";
const Accordian = function ({question,answer}) {
  const [open, setOpen] = useState(false);
  function handleAccordian(e) {
    console.log(e.target.value);
    setOpen(!open);
  }

  return (
    <>
      <div className="faqblock">
        <div className="faqQuestion" onClick={handleAccordian}>
        {
          open ? <i className="fa fa-minus" aria-hidden="true"></i>:<i className="fa fa-plus" aria-hidden="true"></i>
        }
        
          <h6>{question}</h6>
        </div>
        {open && (
          <div className="faqAnswer">
            <p>
              {answer}
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default Accordian;
