# Export Ai file as SVG for web
#####Step 1: File > Export…
    Make sure use “Use Artboards” is checked.

#####Step 2: Click “Export”
    Select Format: SVG (svg)
    
#####Use the following settings:

`Styling: Internal CSS`
#####**`Font: Convert To Outline`**
#####**`Images: Preserve`**
#####**`Decimal: 4`**
#####**`Minify: Checked`**
#####**`Responsive: Unchecked`**

#*BONUS STEP* (for improved legacy browser compatibility)
Open the generated .svg file and add the following XML attribute to the SVG tag:
`preserveAspectRatio="xMidYMid meet"`


  https://webdogs.com/blog/export-svg-web-using-adobe-illustrator/