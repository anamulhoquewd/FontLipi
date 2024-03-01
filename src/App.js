import Item from "./components/Item";
import CountBox from "./components/CountBox";
import ServiceSingleContainer from "./components/ServiceSingleContainer";
import Headline from "./components/Headline";
import DownloadSingleContainer from "./components/DownloadSingleContainer";
import MoreButton from "./components/MoreBtn";
import FooterItem from "./components/FooterItems";

const logo =
  "https://fontlipi.com/wp-content/themes/fontlipi/dist/images/logo.png";
const title =
  "https://fontlipi.com/wp-content/themes/fontlipi/dist/images/fontlipi.svg";
const fontLogoLetterAa =
  "https://fontlipi.com/wp-content/themes/fontlipi/dist/images/services/01.png";
const fontLogoLetterA =
  "https://fontlipi.com/wp-content/themes/fontlipi/dist/images/services/03.png";
const fontLogoDesktop =
  "https://fontlipi.com/wp-content/themes/fontlipi/dist/images/services/02.png";
const fontLogoPen =
  "https://fontlipi.com/wp-content/themes/fontlipi/dist/images/services/04.png";
const fontLogoLetterAaa =
  "https://fontlipi.com/wp-content/themes/fontlipi/dist/images/services/05.png";
const fontLogoWorld =
  "https://fontlipi.com/wp-content/themes/fontlipi/dist/images/services/06.png";
const downloadLogo =
  "https://fontlipi.com/wp-content/themes/fontlipi/dist/images/download/01.png";
const mailIcon =
  "https://fontlipi.com/wp-content/themes/fontlipi/dist/images/footer/message.png";
const mapIcon =
  "https://fontlipi.com/wp-content/themes/fontlipi/dist/images/footer/MapPin.png";
const goToTop =
  "https://fontlipi.com/wp-content/themes/fontlipi/dist/images/footer/a.svg";
const fb = "https://static.xx.fbcdn.net/rsrc.php/yb/r/hLRJ1GG_y0J.ico";
const wsa =
  "https://fontlipi.com/wp-content/themes/fontlipi/dist/images/contact/whatsapp-white.svg";
const iN = "https://static.licdn.com/aero-v1/sc/h/al2o9zrvru7aqj8e1x2rzsrca";
const ins = "https://static.cdninstagram.com/rsrc.php/v3/yI/r/VsNE-OHk_8a.png";

function App() {
  return (
    <div>
      <div className="bg-[#1E2736]">
        <header className="w-5/6 m-auto flex justify-between items-center pt-8 pb-0 px-3">
          <div className=" max-w-[147px]">
            <img src={logo} alt="Fontlipi" className=" max-w-full" />
          </div>
          <nav>
            <ul className="text-white flex gap-10">
              <Item text="ফন্ট" />
              <Item text="ক্যালিগ্রাফি" />
              <Item text="সার্ভিস সমূহ" />
              <Item text="আমাদের টিম" />
              <Item text="যোগাযোগ" />
              <Item text="ড্যাশবোর্ড" />
            </ul>
          </nav>
        </header>
      </div>
      <div id="bg">
        <div className="w-3/5 m-auto py-8 px-3 pb-20 mb-20">
          <div className="mt-16">
            <img src={title} />
            <div className="flex items-center justify-between mt-6">
              <svg
                width="184"
                height="12"
                viewBox="0 0 184 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M183.333 6C183.333 8.94552 180.946 11.3333 178 11.3333C175.054 11.3333 172.667 8.94552 172.667 6C172.667 3.05448 175.054 0.666666 178 0.666667C180.946 0.666667 183.333 3.05448 183.333 6ZM178 7L-6.47849e-08 6.99998L6.47849e-08 4.99998L178 5L178 7Z"
                  fill="white"
                  fill-opacity="0.31"
                ></path>
              </svg>
              <h2 className="text-white text-3xl">আপনাকে স্বাগতম</h2>
              <svg
                width="184"
                height="12"
                viewBox="0 0 184 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.666667 6C0.666667 8.94552 3.05448 11.3333 6 11.3333C8.94552 11.3333 11.3333 8.94552 11.3333 6C11.3333 3.05448 8.94552 0.666666 6 0.666667C3.05448 0.666667 0.666666 3.05448 0.666667 6ZM6 7L184 6.99998L184 4.99998L6 5L6 7Z"
                  fill="white"
                  fill-opacity="0.31"
                ></path>
              </svg>
            </div>
          </div>
          <div className="flex justify-between mt-10">
            <CountBox count="৪৩ টি" type="ফ্রি ফন্ট সম্পন্ন" />
            <CountBox count="২০ টি" type="প্রিমিয়াম ফন্ট সম্পন্ন" />
            <CountBox count="৪,৪২,৩০৮" type="বার ডাউনলোড হয়েছে" />
          </div>
          <div className="mt-20">
            <a
              href="#"
              className="justify-center items-center flex gap-2 text-white"
            >
              <svg
                width="20"
                height="24"
                viewBox="0 0 20 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_438_1346)">
                  <path
                    d="M19.2001 12.3014C19.1151 13.5157 19.1515 15.0189 18.8833 16.4648C18.1507 20.4098 14.7082 23.4968 10.7303 23.9366C5.63106 24.5011 1.1747 21.2435 0.158956 16.2023C0.0851351 15.8366 0.0346752 15.4596 0.0318718 15.0873C0.0150519 13.1491 -0.0251292 11.2089 0.0225274 9.27159C0.124382 5.16438 2.8866 1.5851 6.80098 0.409203C12.2637 -1.23181 17.9657 2.23307 18.9562 7.87251C19.1954 9.2294 19.1179 10.6425 19.2001 12.3014ZM17.235 12.0351C17.2845 12.0341 17.3331 12.0332 17.3826 12.0322C17.3256 10.7391 17.3976 9.4235 17.1854 8.15664C16.5893 4.58768 13.458 1.9405 9.83044 1.80172C6.2861 1.66575 2.96042 4.04381 2.1026 7.50305C1.4569 10.1071 1.84843 12.7852 1.86151 15.4315C1.86245 15.6162 1.9101 15.8019 1.94841 15.9857C2.781 20.0507 6.61502 22.6219 10.4855 22.169C13.8373 21.777 16.8201 19.0051 17.2135 15.635C17.3518 14.4497 17.235 13.2353 17.235 12.0351Z"
                    fill="white"
                  ></path>
                  <path
                    d="M8.65558 7.79717C8.65558 7.25048 8.64717 6.70285 8.65745 6.15616C8.6696 5.52039 9.02282 5.11435 9.55078 5.10685C10.0787 5.09935 10.4572 5.50632 10.4647 6.13459C10.4768 7.24392 10.4759 8.35418 10.4656 9.4635C10.46 10.0974 10.0993 10.5025 9.57321 10.5091C9.0303 10.5156 8.66773 10.0983 8.65745 9.43818C8.64904 8.89149 8.65558 8.34386 8.65558 7.79717Z"
                    fill="white"
                  ></path>
                </g>
                <defs>
                  <clipPath id="clip0_438_1346">
                    <rect width="19.2" height="24" fill="white"></rect>
                  </clipPath>
                </defs>
              </svg>
              <strong className="text-sm hover:text-[#F48B1D] transition-all">
                নিচে আসুন
              </strong>
            </a>
          </div>
        </div>
      </div>
      <div className="bg-white">
        <div className="w-5/6 m-auto py-16 px-3">
          <Headline
            title="আমাদের সেবা সমূহ"
            decs1="আমরা আপনাকে দিচ্ছি আনলিমিটেড রিভিশনের অনন্য সুযোগ......"
            decs2="বেছে নিন- কোন সার্ভিস টি আপনার আশু প্রয়োজন"
          />

          <div className="grid grid-cols-2 gap-7">
            <ServiceSingleContainer
              logo={fontLogoLetterAa}
              title="ফ্রি ফন্ট"
              desc="মাতৃভাষার শ্রেষ্ঠতা মন্ডিত করার জন্য আমাদের রয়েছে প্রিমিয়াম
                  কোয়ালিটি সম্পন্ন ফ্রী ফন্ট যা সবার জন্য উন্মুক্ত।"
            />
            <ServiceSingleContainer
              logo={fontLogoDesktop}
              title="ওয়েব ডিজাইন"
              desc="আমরা দিচ্ছি সত্যিকারের বিজনেস-বান্ধব একটি ওয়েবসাইট যা আপনার সেলস বাড়িয়ে দেবে বহুগুণ..."
            />
            <ServiceSingleContainer
              logo={fontLogoLetterA}
              title="প্রিমিয়াম ফন্ট"
              desc="ফন্ট ডিজাইনে আমাদের অনন্য সাধনার প্রতিফলন যা আপনার ডিজাইন কে করে তুলবে প্রাণবন্ত।"
            />
            <ServiceSingleContainer
              logo={fontLogoPen}
              title="গ্রাফিক্স ডিজাইন"
              desc="একটি প্রফেশনাল ডিজাইন আপনার প্রতিষ্ঠানের বিক্রি বাড়িয়ে দিতে পারে বহু গুণে, আমরা দিচ্ছি ১০০% কোয়ালিটি ডিজাইন এর নিশ্চয়তা।"
            />
            <ServiceSingleContainer
              logo={fontLogoLetterAaa}
              title="মডিফাই ফন্ট"
              desc="আপনার ডিজাইনকে আরো একধাপ এগিয়ে নিয়ে যেতে আমরা তৈরি করেছি মডিফাই ফন্ট।"
            />
            <ServiceSingleContainer
              logo={fontLogoWorld}
              title="ফ্রিল্যান্সিং কোর্স"
              desc="শূন্য থেকে শুরু করে কিভাবে নিজেকে একজন সফল ফ্রিল্যান্সার হিসেবে গড়ে তুলতে পারেন আমাদের রয়েছে তার একটি সঠিক ও প্র্যাকটিক্যাল গাইডলাইন।"
            />
          </div>
        </div>
      </div>
      <div className="bg-[#F7F7F7]">
        <div className="w-5/6 m-auto py-16 px-3">
          <Headline
            title="বাংলা ফন্ট ডাউনলোড করুন"
            decs1="আমরা আপনাদের জন্য নিয়ে উপস্থিত হলাম ফ্রি বাংলা ফন্ট এবং প্রিমিয়াম বাংলা ফন্টের বড় একটি প্লাটফর্ম, বাংলা ফন্টের বিপুল সমাহার।"
            decs2=" নিত্য-নতুন ও আভিজাত্য সকল বাংলা ফন্ট উপহার দিচ্ছি আমরা।"
          />
          <div className="py-10 w-2/4">
            <div>
              <input
                className="text-xl text-gray-900 py-3 px-5 outline-none w-full"
                type="search"
                placeholder="এখানে লিখুন..."
              />
            </div>
          </div>
          <div className="grid grid-cols-3 gap-x-6 gap-y-14">
            <DownloadSingleContainer
              logo={downloadLogo}
              name="প্রাণের মাদিনা"
              title="ইউনিকোড | ২টি"
              text="আমার সোনার বাংলা"
              down="ডাউনলোড করা হয়েছে:"
              dCount="১,৮৮৫"
              downText="ডাউনলোড"
            />
            <DownloadSingleContainer
              logo={downloadLogo}
              name="হযরত আলী রা:"
              title="ইউনিকোড | ২টি"
              text="আমার সোনার বাংলা"
              down="ডাউনলোড করা হয়েছে:"
              dCount="১,৮৮৫"
              downText="ডাউনলোড"
            />
            <DownloadSingleContainer
              logo={downloadLogo}
              name="বাঁধন স্নেহ-১৭"
              title="ইউনিকোড ও আন্সি | ২টি"
              text="আমার সোনার বাংলা"
              down="ডাউনলোড করা হয়েছে:"
              dCount="১,৮৮৫"
              downText="ডাউনলোড"
            />
            <DownloadSingleContainer
              logo={downloadLogo}
              name="এন এস মায়া"
              title="ইউনিকোড ও আন্সি | ২টি"
              text="আমার সোনার বাংলা"
              down="ডাউনলোড করা হয়েছে:"
              dCount="১,৮৮৫"
              downText="ডাউনলোড"
            />
            <DownloadSingleContainer
              logo={downloadLogo}
              name="বনলতা স্পেশাল"
              title="ইউনিকোড | ২টি"
              text="আমার সোনার বাংলা"
              down="ডাউনলোড করা হয়েছে:"
              dCount="১,৮৮৫"
              downText="ডাউনলোড"
            />
            <DownloadSingleContainer
              logo={downloadLogo}
              name="মাহফুজ ইসাহাক"
              title="ইউনিকোড | ২টি"
              text="আমার সোনার বাংলা"
              down="ডাউনলোড করা হয়েছে:"
              dCount="১,৮৮৫"
              downText="ডাউনলোড"
            />
          </div>
          <div className="flex justify-center items-center mt-24">
            <MoreButton />
          </div>
        </div>
      </div>
      <footer className="bg-[#1E2736]">
        <div className="w-5/6 m-auto pt-14 pb-4 flex items-start flex-wrap">
          <div className="w-2/5">
            <div className=" w-40 mb-12">
              <img src={logo} alt="Logo" />
            </div>
            <div className="flex gap-5 items-center justify-start mb-3">
              <img src={mailIcon} alt="email" />
              <span className="text-white text-sm">support@fontlipi.com</span>
            </div>
            <div className="flex gap-5 items-center justify-start">
              <img src={mapIcon} alt="map" />
              <span className="text-white text-sm">
                Banasree, Khilgaon, Dhaka
              </span>
            </div>
          </div>
          <div className="flex justify-between items-end gap-20 w-3/5">
            <FooterItem
              title="গুরুত্বপূর্ণ লিঙ্ক"
              item1="এফিলিয়েট"
              item2="পাসওয়ার্ড রিসেট"
              item3="রেজিস্ট্রেশন"
            />
            <FooterItem
              title="গুরুত্বপূর্ণ লিঙ্ক"
              item1="এফিলিয়েট"
              item2="পাসওয়ার্ড রিসেট"
              item3="রেজিস্ট্রেশন"
            />
            <FooterItem
              title="গুরুত্বপূর্ণ লিঙ্ক"
              item1="এফিলিয়েট"
              item2="পাসওয়ার্ড রিসেট"
              item3="রেজিস্ট্রেশন"
            />
            <div className="mt-8 flex items-center gap-3 cursor-pointer">
              <img src={goToTop} alt="go-to-top" />
              <sapn className="text-white text-sm">উপরে যান</sapn>
            </div>
          </div>
        </div>

        <hr className="w-5/6 m-auto border border-gray-600 opacity-40" />

        <div className="w-5/6 m-auto pb-14 pt-4 flex justify-between items-center">
          <div>
            <span className="text-white text-xs">
              © Copyright 2021 - 2024, All Rights Reserved
            </span>
          </div>
          <div>
            <ul className="flex gap-4">
              <li>
                <a className="text-white text-xs" href="#">
                  শর্তাবলী
                </a>
              </li>
              <li>
                <a className="text-white text-xs" href="#">
                  গোপনীয়তা
                </a>
              </li>
              <li>
                <a className="text-white text-xs" href="#">
                  যোগাযোগ
                </a>
              </li>
            </ul>
          </div>
          <div>
            <ul className="flex justify-center items-center gap-5">
              <li>
                <a href="instagram">
                  <img className="w-6" src={ins} alt="icon" />
                </a>
              </li>
              <li>
                <a href="linkdin.com">
                  <img className="w-6" src={iN} alt="icon" />
                </a>
              </li>
              <li>
                <a href="web.whatsapp.com/">
                  <img className="w-6" src={wsa} alt="icon" />
                </a>
              </li>
              <li>
                <a href="facebook.com">
                  <img className="w-6" src={fb} alt="icon" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
