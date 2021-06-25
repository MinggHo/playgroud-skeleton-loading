import './assets/css/style.css'


/* Skeleton Loader */
const loader = document.querySelector('#loader');
document.onreadystatechange = function () {
  // setTimeout(() => {
  if (document.readyState !== "complete") {
    document.querySelector("body").style.visibility = "hidden";
    document.querySelector("#loader").style.visibility = "visible";
  } else {
    document.querySelector("#loader").style.display = "none";
    document.querySelector("body").style.visibility = "visible";
  }
  // }, 5000);
};


/* Social Share */
function show(showValue) {
  const elem = document.getElementsByTagName('web-social-share');
  if (elem && elem.length > 0) {
    elem[0].show = showValue;
  }
}

// Share options
const articleLink = 'https://exclusive.says.com/my/exclusive/why-mosquitoes-bite-you/';
const share = {
  displayNames: true,
  config: [
    {
      facebook: {
        socialShareUrl: articleLink,
        socialSharePopupWidth: 400,
        socialSharePopupHeight: 400
      }
    },
    {
      twitter: {
        socialShareUrl: articleLink,
        socialSharePopupWidth: 300,
        socialSharePopupHeight: 400
      }
    },
    {
      whatsapp: {
        socialShareText: `Why Do Some People Always Get Bitten By Mosquitoes While Others Don't?`,
        socialShareUrl: articleLink
      }
    },
    {
      copy: {
        socialShareUrl: articleLink
      }
    },
    {
      telegram: {
        socialShareText: `Why Do Some People Always Get Bitten By Mosquitoes While Others Don't?`,
        socialShareUrl: articleLink,
        socialSharePopupWidth: 300,
        socialSharePopupHeight: 400
      }
    }
  ]
};

document.addEventListener('DOMContentLoaded', (event) => {
  const elem = document.getElementsByTagName('web-social-share');
  if (elem && elem.length > 0) {
    elem[0].share = share;
  }
});

const openSocialShareButton = document.querySelector("#social-share");

openSocialShareButton.onclick = () => {
  show(true);
}