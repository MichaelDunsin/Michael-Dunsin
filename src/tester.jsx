return (
<div>
        <div className="container mx-auto flex flex-col-reverse items-center border border-black justify-between py-5 lg:flex-row lg:px-1 xl:px-16 2xl:px-48">
          <div className="max-w-sm text-center sm:max-w-xl lg:w-1/2 lg:text-left">
            <h1 className="text-2xl font-bold sm:text-4xl lg:text-5xl xl:max-w-lg">
              Savour each M<span className="text-xl sm:text-2xl md:text-3xl">🍊</span>ment
              Sip By Sip
            </h1>
            
            <p className="mt-4 text-sm sm:text-lg mb:text-xl lg:mb-16 lg:mt-10">
              Delicious vegetarian softdrink, crafted with fresh ingredients to
              bring back the flavours you love🍹.
            </p>
            <div className="mt-6 lg:mb-20 xl:mb-28">
              <div /* na navlink bin dey here b4 */>
                <button className="swelling-hover cursor-pointer rounded-lg px-6 py-3 font-semibold shadow-lg md:text-xl lg:ml-8">
                  Shop now
                </button>
              </div>
            </div>
          </div>
          <div className="relative lg:w-1/2">
            <img
              src="/images/floating orange.png"
              className="bounce1 absolute w-1/4 max-w-40"
            />
            <img
              src="/images/hero.png"
              className="m-auto w-2/3 max-w-md lg:max-w-none"
            />
            <img
              src="/images/floating avocado.png"
              className="bounce2 absolute bottom-3 right-3 w-1/4 max-w-40"
            />
          </div>
        </div>
</div>

)


