class XyBuilderList {

  constructor() {
      this.data = {}
  }


  init() {
      this.data = {
          'alertList': {
              'top': [],
              'bottom': []
          },
          'dataList': [],
          'dataListParams': {
              'expandKey': 'title',
              'tableName': '',
              'selectable': true,
              'selectType': 'checkbox'
          },
          'topButtonList': [],
          'rightButtonList': [],
          'columns': [],
          'dataPage': {
              'total': 0,
              'limit': 0,
              'page': 0
          },
          'filterItems': [],
          'filterValues': [],
          'filterExtra': [],
          'countList': [],
          'config': {
              'listExpandAll': false,
              'modalDefaultWidth': '800px',
          }
      };
      return this;
  }


  setConfig(name, value) {
      data['config'][name] = value;
      return this;
  }

 
  addAlertItem($layer, $item) {
      data['alertList'][$layer].push($item);
  }


  addTopButton($name, $title, $pageData = [], $style = []) {
      let $btn = {};
      $btn['name'] = $name;
      $btn['title'] = $title;
      $btn['pageData'] = {
          'show': false,
          'pageType': 'modal', 
          'modalType': 'form',
          'modalClosable': false,
      };
      $btn['pageData'] = {...$btn['pageData'], ...$pageData};
      
      $btn['style'] = $style;
      this.data['topButtonList'].push($btn);
      return this;
  }

  addRightButton($name, $title, $pageData = [], $style = []) {
      let $btn = {};
      $btn = this.getRightButton($name, $title, $pageData, $style);
      this.data['rightButtonList'].push($btn);
      return this;
  }

 
  getRightButton($name, $title, $pageData = [], $style = []) {
      let $btn = {};
      $btn['name'] = $name;
      $btn['title'] = $title;
      $btn['pageData'] = {
          'show': false,
          'pageType': 'page', 
          'modalType': 'form',
          'modalClosable': false,
      };
      $btn['pageData'] = {...$btn['pageData'], ...$pageData};
      
      $btn['style'] = $style;
      return $btn;
  }


  addTopButtons($buttons){
      for (const $value of $buttons) {
          this.addTopButton($value['name'], $value['title'], $value['pageData'], $value['style']);
      }
      return this;
  }

 
  addRightButtons($buttons){
      for (const $value of $buttons) {
          this.addRightButton($value['name'], $value['title'], $value['pageData'], $value['style']);
      }
      return this;
  }


  addColums($columns){
      for (const $value of $columns) {
          this.addColumn($value['key'], $value['title'], $value['data']);
      }
      return this;
  }


  addColumn($name, $title, $data = []) {
      let $column = {
          'name': $name,
          'title': $title,
          'extra': {
              'type': '',
              'width': '',
              'minWidth': '',
              'show': true,
              'loading': false,
              'options': [],
              'extend': []
          }
      };
      if ($data['template']) {
          $data['type'] = $data['template'];
          unset($data['template']);
      }
      $column['extra'] = {...$column['extra'], ...$data};
      this.data['columns'].push($column);
      return this;
  }


  setDataList($dataList) {
      this.data['dataList'] = $dataList;
      return this;
  }


  setDataPage($total, $limit = 10, $page = 1) {
      this.data['dataPage'] = {
          'total': $total,
          'limit': $limit,
          'page': $page
      };
      return this;
  }


  setExpandKey($expandKey) {
      this.data['dataListParams']['expandKey'] = $expandKey;
      return this;
  }


  setTableName($tableName) {
      this.data['dataListParams']['tableName'] = $tableName;
      return this;
  }

  
  setSelectType($selectType = 'checkbox') {
      if ($selectType) {
          data['dataListParams']['selectable'] = true;
          data['dataListParams']['selectType'] = $selectType;
      } else {
          data['dataListParams']['selectable'] = false;
      }
      return this;
  }

  
  addFilterItems($list) {
      for (const $v of $list) {
          if (count($v) > 1) {
              this.addFilterItem($v[0], $v[1], $v[2], $v[3], $v[4]);
          }
      }
      return this;
  }

  
  addFilterItem(
      $name,
      $title,
      $type = 'text',
      $value = '' ,
      $extra = []
  ) {
      $item['name'] = $name;
      $item['title'] = $title;
      $item['type'] = $type;
      $item['value'] = $value;
      $item['extra'] = $extra;
      this.data['filterItems'].push($item);
      return this;
  }


  setFilterExtra($item) {
      this.data['filterExtra'] = $item;
      return this;
  }


  addCount(
      $item = {'title': '', 'icon': 'xyicon xyicon-my', 'bgColor': '#f8f8f8'},
      $current = {'value': 0, 'suffix': ''},
      $content = {'value': '', 'list': []}
  ) {
      this.data['countList'].push({
          'item': $item,
          'current': $current,
          'content': $content
      });
      return this;
  }


  getData() {
      return this.data;
  }
}

module.exports = XyBuilderList