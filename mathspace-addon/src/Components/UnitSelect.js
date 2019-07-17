import React from 'react';

//cant figure why this doesn't work but it should build an anchor for each topic passed in
class UnitSelect extends React.Component {
    render() {
        var numItems = this.props.numItems;
        var i
        for (i = 0; i < numItems; i++)
        {
            return(
                this.buildAnchors(i)
            )

        }



}

 buildAnchors(i){
     const topicsArray = this.props.topics;
     const linksArray = this.props.links;
     return (
         <a onClick={linksArray[i]}>{topicsArray[i]}</a>
     );

}
}

export default UnitSelect;