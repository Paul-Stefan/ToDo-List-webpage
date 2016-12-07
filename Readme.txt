1.All code placed inside of head and body tags (Was erroneously placed outside of these tags in previous versions)
2.<dev> is my version of <div> when I’m coding fast and the “dev” is clearly not important enough to cause errors (new version uses div’s as parents and is correctly spelled)
3.Doctype was corrected to !Doctype (bad copy from older code, my bad)
4.(Stil to do) Enter submits form, placeholder value returns after each submit (done),prevent user from submitting an empty task(did not bother is 1st version, will address in “cleanup”)
5.Style.css will be added (forgot to add in previous version, because it was empty the whole time)
6.Each task is a div with a unique class name that is the parent of  checkbox and text node children. This work well for me, but I’m open to other ideas
7.Formatting was, hopefully, addressed (previous version was very much a rough draft, but please forgive any  formatting errors for now)
*minor error when done elements have been hidden and another element is checked while they are hidden and the button is clicked, the hidden tasks appear 
 and the newly checked task disapears causing a back and forth toggle between the two groups. (Can probably easily be solved by writing two functions, one for show and one for hide instead of using one toggle function)
 