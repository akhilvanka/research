
export function ReaderMode(post) {

    let activeMode;
    function hideText() {
        var x = document.getElementsByTagName("p");
        for (var i = 0; i < x.length; i++) {
        if (x[i].style.display === "none") {
          x[i].style.display = "block";
          activeMode = true;
        } else {
          x[i].style.display = "none";
          activeMode = false;
        }
      }
    }

    if (post) {
        return (
             <>
                 <button onClick={hideText} className={
                    activeMode ? 'text-[#D1C9BC] hover:text-neutral-700 px-3' : 'text-neutral-700 hover:text-[#D1C9BC] px-3' 
                    }>Δ</button>
             </>
         )
    }
    else {
        return (
            <></>
        )
    }
}