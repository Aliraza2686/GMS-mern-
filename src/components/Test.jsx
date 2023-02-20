import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
const Test = () => {
    return (
        <div>

            <Carousel autoPlay interval={3000} autoFocus swipeable infiniteLoop thumbWidth={20}  transitionTime useKeyboardArrows stopOnHover showIndicators emulateTouch>
                <div className="bg-green-700 h-72 backdrop-filter">one </div>
                <div className="bg-blue-700 h-72">two</div>
                <div className="bg-gray-400 h-72">three</div>
            </Carousel>

        </div>
    )
}

export default Test