document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("voteForm");
  const occupationMsg = document.getElementById("occupationMsg");
  const markaMsg = document.getElementById("markaMsg");
  const messageBox = document.querySelector(".message-box");

  const occupationMessages = {
    "শিক্ষার্থী": "📚 পরীক্ষায় রিটেক দিলেও, ভোটে আপনি Direct Pass! নৌকার জন্য আপনি গোল্ডেন!",
    "সহ-সভাপতি": "👔 সহ - সভাপতি সাহেব! আপনি রাতে দিয়েছেন ৫৬২ ভোট আর এখন এক আইডি দিয়ে ৬ টা। আপনি যেনো গণতন্ত্রের আলেক্সান্ডার দ্যা গ্রেট!",
    "শেখ পরিবার": "🧬 রক্তেই যদি নৌকা থাকে, তাহলে ভোট তো শুধু পরিবারিক প্রোটোকল!",
    "বেকার": "😴 চাকরি না থাকলেও আপনার ভোট কাজে লাগলো, ধন্যবাদ কর্মহীন উন্নয়নের সহযাত্রী!",
    "সরকারি কর্মকর্তা": "📋 আপনার ভোটের approval memo আগেই পাঠানো হয়েছিল, শুধু পত্রিকার শিরোনাম বাকি",
    "কৃষক": "🌾 আপনি জমিতে চাষ করছেন, কিন্তু ভোট আপনার শহরে পড়েছে!",
    "বিএনপি নেতা": "🔍 আপনি ধানের শীষ দিলেও ভোট নৌকায় গেছে, বিশ্বাস করুন, এটা AI!",
    "গুপ্ত সংঘটন কর্মী": "🕵️‍♂️ আপনার নাম তো তালিকায়ই ছিল না, তবু ভোট গিয়েছে ঠিকঠাক!",
    "ভুয়া ভোটার": "🧟 আপনি কে জানি না, কিন্তু আপনার ৩টা ভোট পড়েছে!",
    "টিকটক কর্মী": "📱আপনি ভিডিও বানানোর ফাঁকে ভোট দিয়ে দিলেন, দারুণ টাইম ম্যানেজমেন্ট!",
    "হাইব্রিড কর্মী": "🔌 আপনি রঙ পাল্টালেও, EVM চিনে নেয়, নৌকার আলো সবখানে!",
    "ইঞ্জিনিয়ার": "🧠 উন্নয়ন আপনি মাপেন, কিন্তু ভোট সবসময় নৌকাতেই পড়ে, এটা হলো অটোমেটেড গণতন্ত্র!",
    "ডাক্তার": "🩺 আপনি রোগী বাঁচান, কিন্তু ভোট গণনায় Dead voter-এরাই বেশি Active!",
    "অন্যান্য": "🤷 আপনার পেশা অজানা, তবুও সরকার আপনাকে চেনে, অভিনন্দন!"
  };

  const markaMessages = {
    "নৌকা": "🎉 অভিনন্দন! আপনি ইতিহাসের ধারায় ভেসে চলেছেন! নৌকার ভেতরে ঢুকলেই উন্নয়ন ফ্রি! বঙ্গবল্টুকে জীবিত করতে চাইলে আবারো ভোট দিন নৌকা মার্কায়।",
    "দাড়িপাল্লা": "হায়রে জামায়াতে ইসলামী! তোমরা দাড়িপাল্লায় আগে ডিডি আমিরের চুমুর ভর হিসাব করো। পরে আসো নির্বাচনে।",
    "লাঙ্গল": "লাঙ্গল আমাদের (নিষিদ্ধ লীগ) পুতুল হতে গিয়ে ভেঙে পড়েছে। বড়ই মায়ার বিরোধী দল😞👈🏿",
    "হাতপাখা": "হাতপাখা এখন আর আগের মতো বাতাস দেয় না। ডামি হিসাবে হাতপাখাই সেরা রে।",
    "ধানের শীষ": "ধানের শীষের হবে জয়? এ যেনো বামুন হয়ে চাঁদে যাওয়ার শখ। চাঁদের কথায় মনে হলো, আমরা আপার সৈনিকথাকতে আপনারা চাদা নিবেন? অসম্ভব! টেম্পু স্ট্যান্ড এখন আমাদের...আপনার ভোট গন্তব্যে পৌঁছায়নি। দয়া করে ১/১১ এর পর আবার চেষ্টা করুন।"
  };

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const occ = document.getElementById("occupation").value;
    const marka = document.getElementById("marka").value;

    // Show messages
    occupationMsg.innerText = occupationMessages[occ] || "🤖 এই পেশা আমাদের সিস্টেমে নেই — তবুও ভোট গেছে ঠিকই।";
    markaMsg.innerText = markaMessages[marka] || "🤔 কোনো মার্কা নির্বাচন করা হয়নি।";

    messageBox.classList.remove("hidden");

    messageBox.scrollIntoView({ behavior: "smooth" });
  });
  const resultBtn = document.getElementById("showResultBtn");
const resultBox = document.getElementById("resultBox");

resultBtn.addEventListener("click", () => {
  resultBox.classList.remove("hidden");
  setTimeout(() => {
    resultBox.classList.add("show");
  }, 10); // trigger CSS transition
});

});
