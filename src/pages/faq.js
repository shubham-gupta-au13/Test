import Header from "../components/header";
import Accordian from "../components/accordian";
import faqdata from "../utility/faqData"

const FAQ = function ({ pageName }) {

    console.log(faqdata)
  return (
    <>
      <Header pageName={pageName} />
      <div className="faqContainer">
        {
            faqdata.map(function(item){

                return <Accordian {...item} key={item.id}/>
            })
        }

      </div>
    </>
  );
};

export default FAQ;
