import React from 'react';
import { connect } from 'react-redux';
import { EditorState, convertToRaw, convertFromRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import { DashboardActionCreator } from '../../actions/dashboard.action';
import './text-setting.css';

class TextSetting extends React.PureComponent {
  constructor(props) {
    super(props);
    const rawContent = this.props.configs.rawContent;
    this.state = {
      editorState: rawContent
        ? EditorState.createWithContent(
            convertFromRaw(this.props.configs.rawContent)
          )
        : EditorState.createEmpty()
    };
  }

  onEditorStateChange = editorState => {
    this.setState({ editorState });
  };

  componentWillUnmount() {
    const { dispatch, widgetId } = this.props;
    const rawContent = convertToRaw(this.state.editorState.getCurrentContent());

    dispatch(DashboardActionCreator.updateConfig(widgetId, { rawContent }));
  }

  render() {
    return (
      <div className="row">
        <Editor
          editorState={this.state.editorState}
          wrapperClassName="text-wrapper"
          editorClassName="text-editor"
          onEditorStateChange={this.onEditorStateChange}
        />
      </div>
    );
  }
}

export default connect()(TextSetting);
