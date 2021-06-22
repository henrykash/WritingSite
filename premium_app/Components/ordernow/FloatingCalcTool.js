
const floatingCalcTool = () => {
  return(
    <>
    <style jsx>
      {`
      *{
        border: 2px solid rgba(0,0,100,.09);
        border-radius: 4px;
        background-color: #f0fcff
        color: #405d6c;
        padding: 20px;
        margin-top: 10%;
      }
      `}
    </style>

    <main className="overflow-hidden float-right relative content-center sticky">
      This is the Floating Calc Session
    </main>
    </>
  )
}

export default floatingCalcTool