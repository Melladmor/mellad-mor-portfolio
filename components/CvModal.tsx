import { heroInfoData } from "@/data/heroData";
import { InstanceNextImage, InstanceNextLink } from "@/pages";

type Props = {
  setShowCvModal: (val: boolean) => void;
};
export default function CvModal(props: Props) {
  const { setShowCvModal } = props;
  const image = heroInfoData.image;

  return (
    <div
      className="relative z-30"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true">
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full  sm:items-center  items-center   justify-center p-4 text-center  sm:p-0">
          <div className="relative transform overflow-hidden rounded-lg  text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
            <div className="main_container p-4">
              <div className="flex justify-end p-2">
                <button
                  onClick={() => setShowCvModal(false)}
                  className="closeBtn">
                  <svg
                    className="w-3 h-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14">
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                    />
                  </svg>
                </button>
              </div>
              <InstanceNextImage
                src={image}
                alt="..."
                width={144}
                height={144}
                className="relative rounded-full shadow-2xl shadow-orange-500 w-36 h-36  mx-auto object-cover"
                loading="lazy"
              />
              <div className="flex justify-center mt-5 gap-2">
                <InstanceNextLink
                  className="modalCvButton"
                  href="/image/Mellad-Morshed.pdf"
                  download>
                  Download Cv
                </InstanceNextLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
