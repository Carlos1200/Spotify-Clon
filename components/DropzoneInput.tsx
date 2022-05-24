import Dropzone, { IDropzoneProps } from 'react-dropzone-uploader'

export const DropzoneInput = () => {
  const getUploadParams: IDropzoneProps['getUploadParams'] = ({ meta }) => {
    const url = 'https://httpbin.org/post'
    return { url, meta: { fileUrl: `${url}/${encodeURIComponent(meta.name)}` } }
  }

  const handleChangeStatus: IDropzoneProps['onChangeStatus'] = (
    { meta },
    status
  ) => {
    console.log(status, meta)
  }

  const handleSubmit: IDropzoneProps['onSubmit'] = (files, allFiles) => {
    console.log(files.map((f) => f.meta))
    allFiles.forEach((f) => f.remove())
  }
  return (
    <Dropzone
      getUploadParams={getUploadParams}
      onChangeStatus={handleChangeStatus}
      onSubmit={handleSubmit}
      accept="audio/*"
      inputContent={(files, extra) =>
        extra.reject ? 'Audio files only' : 'Drag Files'
      }
      styles={{
        dropzoneReject: { borderColor: 'red', backgroundColor: '#DAA' },
        inputLabel: (files, extra) => (extra.reject ? { color: 'red' } : {}),
      }}
    />
  )
}
