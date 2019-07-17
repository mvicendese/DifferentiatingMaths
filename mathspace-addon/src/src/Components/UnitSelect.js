import React from 'react';

//cant figure why this doesn't work but it should build an anchor for each topic passed in
class UnitSelect extends React.Component {
    render(html){
        constructor(this.build())
        return(
            html
        )
    }

    build() {
        var numItems = this.props.numItems;

        var i
        for (i = 0; i < numItems; i++) {

            var html = this.buildAnchor(i)
            this.render(html)
        }





}

 buildAnchor(i){
     const topicsArray = this.props.topics;
     const linksArray = this.props.links;
     return (
         <a onClick={linksArray[i]}>{topicsArray[i]}</a>
     );

}
}

export default UnitSelect;