const floatingCalcTool = () => {
  return(
    <div className="box">
      <div>
        Academic Level
      </div>
      <hr />

      <div>
        Type of Paper
      </div>

      <div>
        Subject Area
      </div>

      <div>
        <div id="PageNumber">NoOfPages</div>
        * 
        <div id="StandardPrice">Custom Standard Price</div>
      </div>

      <div>
        Total Price:
        <div className="bg-red-800 underline" id="TotalPrice" className="border border-gray-500"></div>
      </div>

      <div>
        <input type="text" placeholder="Enter Coupon Code"/><span>{` `}
        <button type="submit" className="inline-flex text-white bg-red-900 border-0 py-2 px-6 focus:outline-none hover:underline rounded text-lg">Apply Coupon Code</button></span>
      </div>
    </div>
  )
}

export default floatingCalcTool