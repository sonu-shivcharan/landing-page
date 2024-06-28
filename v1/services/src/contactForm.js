export default function contactForm(contactSection){
    const formHtml = `<div class="form-container border border-gray-300 bg-white mx-auto my-10 p-10 flex justify-center items-center rounded-2xl shadow-lg">
        <div class="contact-info w-1/2 flex flex-wrap mx-auto gap-2 text-left mr-12 font-bold text-gray-600">
          <a href="tel:+919067702053" class="rounded-lg p-2"><i class="fa-solid fa-phone"></i> +91 9067702053</a>
          <a href="mailto:rakinisofttech@gmail.com" class="rounded-lg p-2"><i class="fa-solid fa-envelope"></i> rakinisofttech@gmail.com</a>
          <a href="https://maps.app.goo.gl/5qmVtQSDPqXXKBxt9" target="_blank" class="rounded-lg p-2">
            <i class="fa-solid fa-location-dot"></i> Pimple Gurav, Pune
            411018
          </a>
        </div>
        <form id="contact-form" class="w-1/2 p-2">
          <div class="flex flex-wrap justify-center flex-row">
            <input type="text" placeholder="Name" class="rounded-2xl p-3 m-2" required />
            <input type="tel" placeholder="Phone" class="rounded-2xl p-3 m-2" required />
            <input type="email" placeholder="Email" class="rounded-2xl p-3 m-2" required />
            <textarea placeholder="Message" class="bg-gray-200 rounded-2xl p-2 m-2" required></textarea>
            <button class="submit-btn w-full text-white rounded-2xl p-2 m-2 my-5 bg-green-700 font-bold">
              Submit
            </button>
          </div>
        </form>
      </div>`
      document.querySelector(contactSection).innerHTML=formHtml;
  }
