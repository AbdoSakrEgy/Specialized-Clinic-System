import React from "react";
import 'tw-elements';

const Home = () => {
    
    return ( 
        <React.Fragment>
            {/* ----------doctor info---------- */}
            {/* <div className="flex justify-end items-start bg-[#f8f8f8] py-[10vh]" style={{boxShadow:"inset 0 3px 10px rgba(0, 0, 0, 0.2)"}}>
                <div className="w-[70%] px-[8vw] py-2 text-right">
                    <div className="text-xl font-semibold text-gray-2 mb-1">طبيب عظام</div>
                    <div className="text-4xl font-bold mb-10">عبدالرحيم السيد صقر</div>
                    <div className="flex justify-end items-center text-[#424243] mb-10">
                        <FaFacebookF style={{fontSize: '20px'}} className="ml-5"/>
                        <FaLinkedin style={{fontSize: '20px'}} className="ml-5"/>
                        <FaInstagram style={{fontSize: '20px'}} className="ml-5"/>
                    </div>
                    <div className="font-semibold text-gray-2 mb-1">
                        يتم إجراء جراحة الجهاز التنفسي بشكل عام من قبل متخصصين في جراحة القلب والصدر (أو جراحة الصدر) على الرغم من إمكانية إجراء عمليات جراحية بسيطة من قبل أخصائي أمراض الرئة. طب الرئة وثيق.
                        <br/>يتم إجراء جراحة الجهاز التنفسي بشكل عام من قبل متخصصين في جراحة القلب والصدر (أو جراحة الصدر) على الرغم من إمكانية إجراء عمليات جراحية بسيطة من قبل أخصائي أمراض الرئة. طب الرئة وثيق.
                    </div>
                </div>
                <div className="flex justify-end items-center pr-10">
                    <img className="w-[300px] h-[300px] rounded-full" src={require('../../Images/doctor1.jpg')} alt={"not found"} />
                </div>
            </div> */}
            {/* ----------Sign---------- */}
{/* Home sections */}
            <div className="h-full">
{/* Home section 1 */}
                <div
                    id="carouselDarkVariant"
                    className="carousel slide carousel-fade relative w-full hidden"
                    data-bs-ride="carousel"
                    >
                    {/*  Indicators */}
                    <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
                        <button
                            data-bs-target="#carouselDarkVariant"
                            data-bs-slide-to="0"
                            className="active"
                            aria-current="true"
                            aria-label="Slide 1"
                        ></button>
                        <button
                            data-bs-target="#carouselDarkVariant"
                            data-bs-slide-to="1"
                            aria-label="Slide 1"
                        ></button>
                        {/* <button
                            data-bs-target="#carouselDarkVariant"
                            data-bs-slide-to="2"
                            aria-label="Slide 1"
                        ></button> */}
                    </div>

                    {/*  Inner */}
                    <div className="overflow-hidden carousel-inner relative w-full">
                        {/*  Single */}
                        <div className="carousel-item active relative float-left w-full h-[70vh]">
                            <img
                                src={require('../../Images/doctor1.jpg')}
                                className="overflow-hidden block w-full h-full brightness-[.3]"
                                alt="..."
                            />
                            <div className="carousel-caption top-[20%] left-[15%] hidden md:block absolute text-right w-[49%]">
                                <h5 className="text-3xl text-white leading-relaxed">
                                    <span>يجب أن يتعافى الشخص الذي يتعاطى الدواء مرتين"</span><br/>
                                    <span>"مرة من المرض ومرة من الدواء</span><br/>
                                    <span className="text-sm text-[#94b9ff]">وليام أوسلر</span>
                                </h5>
                            </div>
                        </div>

                        {/*  Single */}
                        <div className="carousel-item relative float-left w-full h-[70vh]">
                            <img
                                src={require('../../Images/doctor2.jpg')}
                                className="overflow-hidden block w-full h-full brightness-[.3]"
                                alt="..."
                            />
                            <div className="carousel-caption top-[20%] right-[4%] hidden md:block absolute text-right">
                                <h5 className="text-3xl text-white">
                                    <span>"الوهم نصف الداء، والاطمئنان نصف الدواء، والصبر أول خطوات الشفاء"</span><br/>
                                    <span className="text-sm text-[#94b9ff]">ابن سينا</span>
                                    {/* <span>الوهم نصف الداء</span><br/>
                                    <span>والاطمئنان نصف الدواء</span><br/>
                                    <span>والصبر أول خطوات الشفاء</span><br/> */}
                                </h5>
                            </div>
                        </div>

                        {/*  Single */}
                        {/* <div className="carousel-item relative float-left w-full h-[70vh]">
                            <img
                                src={require('../../Images/fruits.jpg')}
                                className="overflow-hidden block w-full h-full brightness-[.3]"
                                alt="..."
                            />
                            <div className="carousel-caption hidden top-[40%] right-[40%] md:block absolute text-right">
                                <h5 className="text-5xl text-white">
                                    <span>اعدل عن الدواء إلي الغذاء</span>
                                </h5>
                            </div>
                        </div> */}
                    </div>
                    {/*  Inner */}

                    {/*  Controls */}
                    {/* <button
                        className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
                        type="button"
                        data-bs-target="#carouselDarkVariant"
                        data-bs-slide="prev"
                    >
                        <span className="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button
                        className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
                        type="button"
                        data-bs-target="#carouselDarkVariant"
                        data-bs-slide="next"
                    >
                        <span className="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button> */}
                </div>
{/* Home section 1.1*/}
                <div className="mx-10 mb-32 flex justify-between items-center">
                    <div className="w-[50%]">
                        <img src={require('../../Images/landing page image.png')} alt="..." />
                    </div>
                    <div className="flex flex-col items-end text-gray-main">
                        <div className="text-5xl font-semibold mb-14 text-black">حافظ علي صحتك الجسدية والنفسية</div>
                        <div className="">"الوهم نصف الداء، والاطمئنان نصف الدواء، والصبر أول خطوات الشفاء"</div>
                        <div className="">فالإلتزام بالتعليمات الوقائية هي خير وسيلة لحماية نفسك</div>
                        <div className="mb-14">وأسرتك والمجتمع من خطر الأمراض اللتي تهدد حياتنا</div>
                        <button className="w-fit text-xl bg-transparentn text-blue-1 font-semibold  py-2 px-4 border border-blue-1  rounded hover:bg-blue-1 hover:text-white hover:border-transparent">
                            <a href="#scrollflag">احجز الآن</a>
                        </button>
                    </div>
                </div>
{/* Home section 2 */}
                <div className="mx-10 mb-40 grid grid-cols-2">
                    
                    <div className="flex flex-col text-right pt-5 pl-16 text-gray-main">
                        <span className="leading-[2rem] mb-5">احصل على أحدث المعلومات حول المرض الفيروسي الجديد في الوقت الحاضر ، وتعلم كيفية حماية نفسك والاستفادة من خدماتنا المريحة</span>
                        <span className="leading-[2rem]">نحن نعمل بجد لتقليل المهل الزمنية وسنخبرك إذا تأخر طلبك. يرجى الانتظار حتى يتم التحديث عبر البريد الإلكتروني بدلاً من الاتصال بفريق خدمة العملاء لدينا لأننا نعطي الأولوية لمرضانا الأكثر ضعفًا في هذا الوقت</span>
                    </div>

                    <div className="flex flex-col pl-10">
                        <div className="flex justify-end items-center mb-5 text-[#ff8367]">
                            <span style={{fontSize:"25px"}}>الخطر يهدد الجميع</span>
                            <img className="w-[3vw] ml-5" src={require('../../Images/covid-19.png')} alt="..." />
                        </div>
                        <div className="items-end text-4xl text-right leading-[4rem]">
                            <span>إلتزم بالتعليمات الوقائية</span><br/>
                            <span>وإعتني بنفسك وأسرتك أثناء الجائحة</span>
                        </div>
                    </div>

                </div>
{/* Home section 3 */}
                <div className="mx-10 mb-40 flex flex-col items-center">
                    <div className="text-5xl font-semibold">من <span className="text-blue-1">نحن</span></div>
                    <div className="flex justify-between items-center">
                        <div className="w-[60%]">
                            <img src={require('../../Images/test.png')} alt="..." />
                        </div>
                        <div className="w-[40%] text-right pr-20">
                            <div className="text-5xl font-semibold mb-5">قصة عن المستشفي</div>
                            <div className="text-3xl font-medium mb-10 text-blue-1">وكيف وصلنا إلي هذه النقطة</div>
                            <div className="text-gray-main">
                            فتحت أبواب المستشفى في 7 يوليو 2007 لاستقبال الأطفال المرضى بالمجان تماما بطاقة 30 سريرًا في المرحلة الأولى، تمهيدا لتشغيله فيما بعد بكامل طاقته البالغة 185 سريرا والمتوقّع ازديادها إلى 365 سريرا.
                            <br />
                            تقع المستشفى على مساحة 69 ألف متر مربع وبلغت تكلفة إنشاء المبنى والأماكن المحيطة به 300 مليون جنيه، وصمم المستشفى جوناثان بيلي المهندس الشهير في إنشاء التصميمات المستقبلية بالتعاون مع الخبرة الهندسية المصرية المجانية التي مزجت دون بهرجة بين المبنى الزجاجي الكروي الحداثي والأحجار الصلدة
                            <br />
                            وصممت النوافذ الزجاجية التي تحتوي على غاز خامل بغرض توفير الكهرباء والضوء ولتمكين الأطفال المصابين من التواصل مع العالم الخارجي لبث الطمأنينة نفسيًّا في قلوبهم. ويضم المستشفى مركزًا للعلاج النوويّ والإشعاعي والكيميائي وبنك الدم ومختبر الفيروسات ومعامل الجينات وتخزين الخلايا الجذعية والعيادات الخارجية وحجرات العمليات وأقسام الأشعة والمعامل والصيدلية.
                            </div>
                        </div>
                    </div>
                </div>
{/* Home section 4 */}
                <div className="mx-10 mb-40">
                    <div className="text-center text-5xl font-semibold mb-16">الخدمات<span className="text-blue-1"> الطبية</span></div>
                    <div className="flex flex-nowrap justify-center items-center">
                        {/* التخصص الأول */}
                        <div class="MedicalDepartmentCard">
                            <div class="rounded-lg shadow-lg bg-white max-w-sm">
                                {/* <a href="#!"> */}
                                    <img class="rounded-t-lg brightness-50" src={require('../../Images/ENT.jpg')} alt={"not found"}/>
                                {/* </a> */}
                                    <div class="p-6">
                                    <h5 class="text-2xl font-semibold mb-7">الأنف والأذن والحنجرة</h5>
                                    <p class="text-gray-main leading-8 text-base mb-4">
                                        تعامل مع طاقم طبي علي أعلي مستوي من المختصين في جميع المجالات المتاحة، للحصول علي أفضل رعاية طبية كاملة لك ولأسرتك
                                    </p>
                                    {/* <button type="button" class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">عرض الأطباء</button> */}
                                </div>
                            </div>
                            </div>
                        {/* التخصص الثاني */}
                        <div class="MedicalDepartmentCard mx-32">
                            <div class="rounded-lg shadow-lg bg-white max-w-sm">
                                {/* <a href="#!"> */}
                                    <img class="rounded-t-lg brightness-50" src={require('../../Images/Internal Medicine.jpg')} alt={"not found"}/>
                                {/* </a> */}
                                    <div class="p-6">
                                    <h5 class="text-2xl font-semibold mb-7">الباطنة</h5>
                                    <p class="text-gray-main leading-8 text-base mb-4">
                                        تعامل مع طاقم طبي علي أعلي مستوي من المختصين في جميع المجالات المتاحة، للحصول علي أفضل رعاية طبية كاملة لك ولأسرتك
                                    </p>
                                    {/* <button type="button" class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">عرض الأطباء</button> */}
                                </div>
                            </div>
                            </div>
                        {/* التخصص الثالث */}
                        <div class="MedicalDepartmentCard">
                            <div class="rounded-lg shadow-lg bg-white max-w-sm">
                                {/* <a href="#!"> */}
                                    <img class="rounded-t-lg brightness-50" src={require('../../Images/dentist.jpg')} alt={"not found"}/>
                                {/* </a> */}
                                    <div class="p-6">
                                    <h5 class="text-2xl font-semibold mb-7">الأسنان</h5>
                                    <p class="text-gray-main leading-8 text-base mb-4">
                                        تعامل مع طاقم طبي علي أعلي مستوي من المختصين في جميع المجالات المتاحة، للحصول علي أفضل رعاية طبية كاملة لك ولأسرتك
                                    </p>
                                    {/* <button type="button" class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">عرض الأطباء</button> */}
                                </div>
                            </div>
                            </div>
                    </div>
                </div>
{/*Home section 5 */}
                <div className="h-fit mx-10 mb-40">
                    <div className="text-center">
                        <div className="text-5xl font-semibold mb-16">الطاقم <span className="text-blue-1">الطبي</span></div>
                    </div>
                    <div className="h-fit flex overflow-x-scroll scrollDoctorsDiv">
                        <div className="h-fit flex flex-nowrap justify-center py-5">
                            {/* الطبيب الأول */}
                            <div class="DoctorInfoCard">
                                <div class="DoctorInfoCardDiv">
                                    <img class="w-full h-[15rem] brightness-50" src={require('../../Images/d1.jpg')} alt={"not found"}/>
                                    <div class="p-6">
                                        <div class="text-black font-bold text-xl mb-8">عبدالرحيم صقر</div>
                                        <span className="font-bold text-lg px-3 py-1 rounded-lg bg-[#3b83f638] text-[#3B82F6]">أنف وأذن وحنجرة</span><br />
                                        <div className="flex justify-end font-bold text-lg mt-5">
                                            <div>مريض</div>
                                            <div className="ml-2">2000+</div>
                                        </div>
                                        <div className="flex justify-end font-thin mt-3 text-gray-main">
                                            <div>سنة من الخبرة العملية</div>
                                            <div className="ml-1">12</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* الطبيب الثاني */}
                            <div class="DoctorInfoCard">
                                <div class="DoctorInfoCardDiv">
                                    <img class="w-full h-[15rem] brightness-50" src={require('../../Images/d2.jpg')} alt={"not found"}/>
                                    <div class="p-6">
                                        <div class="text-black font-bold text-xl mb-8">عبدالرحيم صقر</div>
                                        <span className="font-bold text-lg px-3 py-1 rounded-lg bg-[#3b83f638] text-[#3B82F6]">باطنة</span><br />
                                        <div className="flex justify-end font-bold text-lg mt-5">
                                            <div>مريض</div>
                                            <div className="ml-2">2000+</div>
                                        </div>
                                        <div className="flex justify-end font-thin mt-3 text-gray-main">
                                            <div>سنة من الخبرة العملية</div>
                                            <div className="ml-1">12</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* الطبيب الثالث */}
                            <div class="DoctorInfoCard">
                                <div class="DoctorInfoCardDiv">
                                    <img class="w-full h-[15rem] brightness-50" src={require('../../Images/d3.jpg')} alt={"not found"}/>
                                    <div class="p-6">
                                        <div class="text-black font-bold text-xl mb-8">عبدالرحيم صقر</div>
                                        <span className="font-bold text-lg px-3 py-1 rounded-lg bg-[#3b83f638] text-[#3B82F6]">أسنان</span><br />
                                        <div className="flex justify-end font-bold text-lg mt-5">
                                            <div>مريض</div>
                                            <div className="ml-2">2000+</div>
                                        </div>
                                        <div className="flex justify-end font-thin mt-3 text-gray-main">
                                            <div>سنة من الخبرة العملية</div>
                                            <div className="ml-1">12</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* الطبيب الرابع */}
                            <div class="DoctorInfoCard">
                                <div class="DoctorInfoCardDiv">
                                    <img class="w-full h-[15rem] brightness-50" src={require('../../Images/d4.jpg')} alt={"not found"}/>
                                    <div class="p-6">
                                        <div class="text-black font-bold text-xl mb-8">عبدالرحيم صقر</div>
                                        <span className="font-bold text-lg px-3 py-1 rounded-lg bg-[#3b83f638] text-[#3B82F6]">أنف وأذن وحنجرة</span><br />
                                        <div className="flex justify-end font-bold text-lg mt-5">
                                            <div>مريض</div>
                                            <div className="ml-2">2000+</div>
                                        </div>
                                        <div className="flex justify-end font-thin mt-3 text-gray-main">
                                            <div>سنة من الخبرة العملية</div>
                                            <div className="ml-1">12</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* الطبيب الخامس */}
                            <div class="DoctorInfoCard">
                                <div class="DoctorInfoCardDiv">
                                    <img class="w-full h-[15rem] brightness-50" src={require('../../Images/d5.jpg')} alt={"not found"}/>
                                    <div class="p-6">
                                        <div class="text-black font-bold text-xl mb-8">عبدالرحيم صقر</div>
                                        <span className="font-bold text-lg px-3 py-1 rounded-lg bg-[#3b83f638] text-[#3B82F6]">باطنة</span><br />
                                        <div className="flex justify-end font-bold text-lg mt-5">
                                            <div>مريض</div>
                                            <div className="ml-2">2000+</div>
                                        </div>
                                        <div className="flex justify-end font-thin mt-3 text-gray-main">
                                            <div>سنة من الخبرة العملية</div>
                                            <div className="ml-1">12</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* الطبيب السادس */}
                            <div class="DoctorInfoCard">
                                <div class="DoctorInfoCardDiv">
                                    <img class="w-full h-[15rem] brightness-50" src={require('../../Images/d1.jpg')} alt={"not found"}/>
                                    <div class="p-6">
                                        <div class="text-black font-bold text-xl mb-8">عبدالرحيم صقر</div>
                                        <span className="font-bold text-lg px-3 py-1 rounded-lg bg-[#3b83f638] text-[#3B82F6]">أسنان</span><br />
                                        <div className="flex justify-end font-bold text-lg mt-5">
                                            <div>مريض</div>
                                            <div className="ml-2">2000+</div>
                                        </div>
                                        <div className="flex justify-end font-thin mt-3 text-gray-main">
                                            <div>سنة من الخبرة العملية</div>
                                            <div className="ml-1">12</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
{/* Home section 6 */}
                <div className="h-fit mx-10 mb-40" id="scrollflag">
                    <div className="text-center">
                        <div className="text-5xl font-semibold mb-16">احجز <span className="text-blue-1">موعدك</span></div>
                    </div>
                    <div className="flex justify-center items-center">
                        <div className="w-1/2">
                            <img src={require("../../Images/Appointment.png")} alt="..." />
                        </div>
                        <div className="h-fit w-1/2">
                            <form action="" className="AppiontmentForm">

                                <div className="w-full">
                                    <div className="mb-1 font-semibold">اسم المريض</div>
                                    <input type="text" className="AppiontmentInput text-right" />
                                </div>

                                <div className="w-full">
                                    <div className="mb-1 font-semibold">التخصص</div>
                                    <select name="available time" className="AppiontmentInput">
                                        <option value="" selected hidden>---</option>
                                        <option value="">أسنان</option>
                                        <option value="">باطنة</option>
                                        <option value="">أنف وأذن وحنجرة</option>
                                    </select>
                                </div>

                                <div className="w-full">
                                    <div className="mb-1 font-semibold"> الطبيب</div>
                                    <select name="available time" className="AppiontmentInput">
                                        <option value="" selected hidden>---</option>
                                        <option value="">عبدالرحيم صقر</option>
                                        <option value="">عبدالرحيم صقر</option>
                                        <option value="">عبدالرحيم صقر</option>
                                    </select>
                                </div>
                                
                                <div className="w-full flex justify-between items-start">
                                    <div className="w-full mr-7">
                                        <div className="mb-1 font-semibold">الأوقات المتاحة</div>
                                        <select name="available time" className="AppiontmentInput">
                                            <option value="" selected hidden>---</option>
                                            <option value="09:00 AM">09:00 AM</option>
                                            <option value="09:30 AM">09:30 AM</option>
                                            <option value="10:00 AM">10:00 AM</option>
                                            <option value="10:30 AM">10:30 AM</option>
                                        </select>
                                    </div>
                                    <div className="w-full">
                                        <div className="mb-1 font-semibold">تاريخ الموعد</div>
                                        <input type="date" className="AppiontmentInput" />
                                    </div>
                                </div>

                                <div className="flex justify-end items-center  mt-10">
                                    {/* <button className="mr-5 text-xl bg-transparentn text-gray-main py-2 px-4 ">
                                        إلغاء
                                    </button> */}
                                    <input type="reset" value="إلغاء" className="cursor-pointer mr-5 text-xl"/>
                                    <button className="text-2xl min-w-[10vw] py-2 px-4 rounded shadow-md bg-blue-1 text-white">
                                        احجز الآن
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
{/* Home section 7 */}
                <footer className="text-center bg-[#f1f8f6]">
                    <div className="text-xl p-7">
                        <span className="">© 2022 Copyright: </span>
                        <a href="#" className="font-bold text-blue-1">عبدالرحيم السيد صقر</a>
                    </div>
                </footer>
            </div>
        </React.Fragment>
     );
}
 
export default Home;