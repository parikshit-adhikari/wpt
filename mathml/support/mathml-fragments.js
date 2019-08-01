var MathMLFragments = {
    "annotation": "\
<semantics>\
  <mrow></mrow>\
  <annotation class='element text-container'></annotation>\
</semantics>",
    "annotation-xml": "\
<semantics>\
  <mrow></mrow>\
  <annotation-xml class='element text-container foreign-container'></annotation-xml>\
</semantics>",
    "maction": "\
<maction class='element' actiontype='statusline'>\
  <mrow class='mathml-container'></mrow>\
  <mtext class='text-container'></mtext>\
</maction>",
    "menclose": "<menclose class='element mathml-container'></menclose>",
    "merror": "<merror class='element mathml-container'></merror>",
    "mfrac": "\
<mfrac class='element'>\
  <mrow class='mathml-container'></mrow>\
  <mrow class='mathml-container'></mrow>\
</mfrac>",
    "mi": "<mi class='element text-container foreign-container'></mi>",
    "mmultiscripts": "\
<mmultiscripts class='element'>\
  <mrow class='mathml-container'></mrow>\
  <mrow class='mathml-container'></mrow>\
  <mrow class='mathml-container'></mrow>\
</mmultiscripts>",
    "mn": "<mn class='element text-container foreign-container'></mn>",
    "mo": "<mo class='element text-container foreign-container'></mo>",
    "mover": "\
<mover class='element'>\
  <mrow class='mathml-container'></mrow>\
  <mrow class='mathml-container'></mrow>\
</mover>",
    "mpadded": "<mpadded class='element mathml-container'></mpadded>",
    "mphantom": "<mphantom class='element mathml-container'></mphantom>",
    "mprescripts": "\
<mmultiscripts>\
  <mrow class='mathml-container'></mrow>\
  <mprescripts class='element'/>\
  <mrow class='mathml-container'></mrow>\
  <mrow class='mathml-container'></mrow>\
</mmultiscripts>",
    "mroot": "\
<mroot class='element'>\
  <mrow class='mathml-container'></mrow>\
  <mrow class='mathml-container'></mrow>\
</mroot>",
    "mrow": "<mrow class='element mathml-container'></mrow>",
    "ms": "<ms class='element text-container foreign-container'></ms>",
    "mspace": "<mspace class='element'></mspace>",
    "msqrt": "<msqrt class='element mathml-container'></msqrt>",
    "mstyle": "<mstyle class='element mathml-container'></mstyle>",
    "msub": "\
<msub class='element'>\
  <mrow class='mathml-container'></mrow>\
  <mrow class='mathml-container'></mrow>\
</msub>",
    "msubsup": "\
<msubsup class='element'>\
  <mrow class='mathml-container'></mrow>\
  <mrow class='mathml-container'></mrow>\
  <mrow class='mathml-container'></mrow>\
</msubsup>",
    "msup": "\
<msup class='element'>\
  <mrow class='mathml-container'></mrow>\
  <mrow class='mathml-container'></mrow>\
</msup>",
    "mtable": "\
<mtable class='element'>\
  <mtr>\
    <mtd class='mathml-container'>\
    </mtd>\
  </mtr>\
</mtable>",
    "mtd": "\
<mtable>\
  <mtr>\
    <mtd class='element mathml-container'>\
    </mtd>\
  </mtr>\
</mtable>",
    "mtext": "<mtext class='element text-container foreign-container'></mtext>",
    "mtr": "\
<mtable>\
  <mtr class='element'>\
    <mtd class='mathml-container'>\
    </mtd>\
  </mtr>\
</mtable>",
    "munder": "\
<munder class='element'>\
  <mrow class='mathml-container'></mrow>\
  <mrow class='mathml-container'></mrow>\
</munder>",
    "munderover": "\
<munderover class='element'>\
  <mrow class='mathml-container'></mrow>\
  <mrow class='mathml-container'></mrow>\
  <mrow class='mathml-container'></mrow>\
</munderover>",
    "none": "\
<mmultiscripts>\
  <mrow class='mathml-container'></mrow>\
  <none class='element'/>\
  <mrow class='mathml-container'></mrow>\
</mmultiscripts>",
    "semantics": "\
<semantics class='element'>\
  <mrow class='mathml-container'></mrow>\
  <annotation class='text-container'></annotation>\
</semantics>"
};

var FragmentHelper = {
    createElement: function(tag) {
        return document.createElementNS("http://www.w3.org/1998/Math/MathML", tag);
    },

    isValidChildOfMrow: function(tag) {
        return !(tag == "annotation" ||
                 tag == "annotation-xml" ||
                 tag == "mprescripts" ||
                 tag == "none" ||
                 tag == "mtr" ||
                 tag == "mtd");
    },

    isEmpty: function(tag) {
        return tag === "mspace" || tag == "mprescripts" || tag == "none";
    },

    element: function(fragment) {
        return fragment.getElementsByClassName('element')[0];
    },

    forceNonEmptyElement: function(fragment) {
        var element = this.element(fragment) || fragment;
        if (element.firstElementChild)
            return element.firstElementChild;
        if (element.classList.contains("mathml-container"))
            return element.appendChild(this.createElement("mrow"));
        if (element.classList.contains("foreign-container")) {
            var el = document.createElement("span");
            el.textContent = "a";
            return element.appendChild(el);
        }
        throw "Cannot make the element nonempty";
    }
}
