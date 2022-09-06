
let countUp = function(Element = $(''), option)
{
    let tillValue = parseInt(Element.text());
    
    let delay = 0;
    let currValue = 0;
    let increament = 1;

    if (option)
    {
        currValue = option.startValue && option.startValue < tillValue ? option.startValue : 0;
        delay = option.speed && option.speed >= 0 ? option.speed : 0;
        increament = option.increament && option.increament > 0 ? option.increament : 1;
    }

    let Count = ()=>
    {
        if (currValue >= tillValue)
        {
            currValue = tillValue;
            Element.text(currValue);
            return;
        }

        currValue += increament;
        Element.text(currValue);

        setTimeout(Count,delay);
    }

    Count();
}


