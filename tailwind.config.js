// remember to use module.exports instead of tailwind.config in production
module.exports = 
   {
      // Note: config only includes the used styles & variables of your selection
      content: ["./src/**/*.{html,vue,svelte,js,ts,jsx,tsx}"],
      theme: {
        extend: {
          fontFamily: {
            'headline-display-h1-font-family': "Geist-Regular, sans-serif",
'body-16px-medium-font-family': "Geist-Medium, sans-serif",
'body-18px-medium-font-family': "Geist-Medium, sans-serif",
'body-16px-regular-font-family': "Geist-Regular, sans-serif",
'body-18px-regular-font-family': "Geist-Regular, sans-serif",
'body-20px-regular-font-family': "Geist-Regular, sans-serif",
'headline-h2-font-family': "Geist-Regular, sans-serif",
          },
          fontSize: {
            'headline-display-h1-font-size': "80px",
'body-16px-medium-font-size': "16px",
'body-18px-medium-font-size': "18px",
'body-16px-regular-font-size': "16px",
'body-18px-regular-font-size': "18px",
'body-20px-regular-font-size': "20px",
'headline-h2-font-size': "48px",
          },
          fontWeight: {
            'headline-display-h1-font-weight': "400",
'body-16px-medium-font-weight': "500",
'body-18px-medium-font-weight': "500",
'body-16px-regular-font-weight': "400",
'body-18px-regular-font-weight': "400",
'body-20px-regular-font-weight': "400",
'headline-h2-font-weight': "400",
          },
          lineHeight: {
            'headline-display-h1-line-height': "115%",
'body-16px-medium-line-height': "180%",
'body-18px-medium-line-height': "180%",
'body-16px-regular-line-height': "170%",
'body-18px-regular-line-height': "180%",
'body-20px-regular-line-height': "180%",
'headline-h2-line-height': "130%", 
          },
          letterSpacing: {
             
          },
          borderRadius: {
              
          },
          colors: {
            'neutral-white': '#ffffff',
'theme-colors-color-01': '#dbfb1e',
'neutral-neutral-04': '#0a0915',
'neutral-neutral-01': '#f7f6f4',
'neutral-neutral-03': '#5c5c6e',
'theme-colors-color-02': '#203f30',
            
          },
          spacing: {
              
          },
          width: {
             
          },
          minWidth: {
             
          },
          maxWidth: {
             
          },
          height: {
             
          },
          minHeight: {
             
          },
          maxHeight: {
             
          }
        }
      }
    }

          