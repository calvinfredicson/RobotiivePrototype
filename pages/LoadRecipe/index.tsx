import { Box, Button, Input, Paper, styled, TextField, Typography, useTheme, FormLabel, FormControl, FormControlLabel, RadioGroup, Radio } from "@mui/material"
import { NextPage } from "next"
import { useRouter } from "next/router"
import { useState, useCallback, ChangeEvent, FormEvent } from "react"
import { LoadingPage } from "../../Components"
import { BasicInfoDialog } from "../../Components/Dialogs"
import { delay, generateRoute } from "../../utilityFunctions"

const Index: NextPage = () => {
  const theme = useTheme()
  const router = useRouter()
  const [selectedFile, setSelectedFile] = useState<null | File>(null)
  const [showConfig, setShowConfig] = useState(false)
  const [selectedRadio, setSelectedRadio] = useState<string | null>(null)
  const [subOption, setSubOption] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const [dialogOpen, setDialogOpen] = useState(false)
  const uploadFile = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return
    setSelectedFile(e.target.files[0])
  }, [])
  const infoText = "Fill the ID, machineID, case file and press config button. After pressing select Option 2 and subOption 2. Finally click next"

  const toComplete = useCallback(async (e: FormEvent) => {
    e.preventDefault()
    setLoading(true)
    await delay(5)
    setLoading(false)
    router.replace(generateRoute(router.pathname, '/ProcessComplete/'))
  }, [router, setLoading])

  if (!loading) {
    return (
      <form onSubmit={toComplete}>
        <Box display="flex" gap={2} alignItems="center" justifyContent="center" height="100vh" width="100vw">
          <Box component={Paper} variant="outlined" padding={theme.spacing(5, 4)} paddingBottom={8} display="grid" alignItems="center" gridTemplateColumns="auto auto auto" gap={3}>
            <Typography variant="h4" align="center" fontWeight="bold" sx={{ gridColumn: "span 3", margin: theme.spacing(2, 'auto') }}>Machine Loader</Typography>
            <Typography>ID</Typography>
            <TextField required={true} type="text" size="small" variant="outlined" placeholder="Enter Recipe ID" sx={{ gridColumn: "span 2" }} />
            <Typography>Machine ID</Typography>
            <TextField required type="text" size="small" variant="outlined" placeholder="Enter Recipe ID" sx={{ gridColumn: "span 2" }} />
            <Typography>Case File</Typography>
            <TextField required size="small" variant="outlined" placeholder="Case File" value={selectedFile?.name} />
            <label htmlFor="contained-button-file">
              <FileInput type="file" id="contained-button-file" inputProps={{ accept: '.zip' }} onChange={uploadFile} />
              <Button variant="outlined" component="span">Upload File (.zip)</Button>
            </label>
            <Typography>Config</Typography>
            <TextField required disabled size="small" variant="outlined" placeholder="select config" value={selectedRadio} />
            <Button type="button" variant="outlined" onClick={() => setShowConfig(true)}>Config</Button>
            {
              selectedRadio == "Option 2" && (
                <FormControl component="fieldset" style={{ gridColumn: 'span 3' }}>
                  <FormLabel component="legend">Config</FormLabel>
                  <RadioGroup row aria-label="gender" name="row-radio-buttons-group" value={subOption} onChange={e => setSubOption(e.target.value)}>
                    <FormControlLabel value="Sub Option-1" control={<Radio />} label="Sub Option 1" />
                    <FormControlLabel value="Sub Option-2" control={<Radio />} label="Sub Option 2" />
                  </RadioGroup>
                </FormControl>
              )
            }
            {
              showConfig && (
                <FormControl component="fieldset" style={{ gridColumn: 'span 3' }}>
                  <FormLabel component="legend">Config</FormLabel>
                  <RadioGroup row aria-label="gender" name="row-radio-buttons-group" value={selectedRadio} onChange={e => setSelectedRadio(e.target.value)}>
                    <FormControlLabel value="Option 1" control={<Radio />} label="Option 1" />
                    <FormControlLabel value="Option 2" control={<Radio />} label="Option 2" />
                    <FormControlLabel value="Option 3" control={<Radio />} label="Option 3" />
                  </RadioGroup>
                </FormControl>
              )
            }
            {
              selectedRadio && (
                <>
                  <Button type="submit" variant="contained" onClick={toComplete}>Next</Button>
                  <Button type="button" onClick={() => setDialogOpen(true)} variant="outlined">Info</Button>
                  <BasicInfoDialog open={dialogOpen} stateSetter={setDialogOpen} info={infoText} />
                </>
              )
            }
          </Box>
        </Box>
      </form>
    )
  } else {
    return <LoadingPage />
  }
}

export default Index

const FileInput = styled(Input, { name: 'File Input' })(() => ({
  display: 'none'
}))