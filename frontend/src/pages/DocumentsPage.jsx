import { useEffect, useMemo, useState } from "react"

import {
    FaArrowRight,
    FaCloudUploadAlt,
    FaDownload,
    FaEye,
    FaFileAlt,
    FaFileImage,
    FaFilePdf,
    FaFolderOpen,
    FaIdBadge,
    FaImage,
    FaSearch,
    FaShieldAlt,
    FaUserTie
} from "react-icons/fa"

import { getEmployees } from "../services/employeeService"

import {
    getDocumentDownloadUrl,
    getDocumentViewUrl,
    getEmployeeDocuments,
    uploadDocument,
    uploadProfileImage
} from "../services/documentService"

const HERO_IMAGE =
    "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1400&q=80"

const AUDIT_IMAGE =
    "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=900&q=80"

const VAULT_IMAGE =
    "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=80"

function DocumentsPage() {

    const [employees, setEmployees] =
        useState([])

    const [selectedEmployeeId, setSelectedEmployeeId] =
        useState("")

    const [documents, setDocuments] =
        useState([])

    const [documentFile, setDocumentFile] =
        useState(null)

    const [profileFile, setProfileFile] =
        useState(null)

    const [searchTerm, setSearchTerm] =
        useState("")

    const [isLoading, setIsLoading] =
        useState(false)

    const [isUploading, setIsUploading] =
        useState(false)

    const [message, setMessage] =
        useState("")

    async function fetchDocuments(employeeId) {

        setIsLoading(true)

        try {

            const data =
                await getEmployeeDocuments(employeeId)

            setDocuments(data)

        } catch (error) {

            console.log(error)

            setDocuments([])

            setMessage(
                "Unable to load documents for this employee."
            )
        } finally {

            setIsLoading(false)
        }
    }

    useEffect(() => {

        let isMounted =
            true

        getEmployees()
            .then((data) => {

                if (!isMounted) {

                    return
                }

                setEmployees(data)

                if (data.length > 0) {

                    setSelectedEmployeeId(data[0].id)
                }
            })
            .catch((error) => {

                console.log(error)

                if (isMounted) {

                    setMessage(
                        "Unable to load employees. Please confirm the backend is running."
                    )
                }
            })

        return () => {

            isMounted = false
        }

    }, [])

    useEffect(() => {

        if (selectedEmployeeId) {

            let isMounted =
                true

            Promise.resolve()
                .then(() => {

                    if (isMounted) {

                        setIsLoading(true)
                    }

                    return getEmployeeDocuments(
                        selectedEmployeeId
                    )
                })
                .then((data) => {

                    if (isMounted) {

                        setDocuments(data)
                    }
                })
                .catch((error) => {

                    console.log(error)

                    if (isMounted) {

                        setDocuments([])

                        setMessage(
                            "Unable to load documents for this employee."
                        )
                    }
                })
                .finally(() => {

                    if (isMounted) {

                        setIsLoading(false)
                    }
                })

            return () => {

                isMounted = false
            }
        }

    }, [selectedEmployeeId])

    const selectedEmployee =
        useMemo(
            () =>
                employees.find(
                    (employee) =>
                        String(employee.id) ===
                        String(selectedEmployeeId)
                ),
            [
                employees,
                selectedEmployeeId
            ]
        )

    const filteredDocuments =
        documents.filter((document) =>
            `${document.fileName || ""}
             ${document.fileType || ""}`
                .toLowerCase()
                .includes(searchTerm.toLowerCase())
        )

    const handleDocumentUpload = async (event) => {

        event.preventDefault()

        if (!selectedEmployeeId || !documentFile) {

            setMessage(
                "Select an employee and choose a document first."
            )

            return
        }

        setIsUploading(true)
        setMessage("")

        try {

            await uploadDocument(
                selectedEmployeeId,
                documentFile
            )

            setDocumentFile(null)

            event.target.reset()

            await fetchDocuments(selectedEmployeeId)

            setMessage(
                "Document uploaded successfully."
            )

        } catch (error) {

            console.log(error)

            setMessage(
                "Document upload failed. Please try again."
            )

        } finally {

            setIsUploading(false)
        }
    }

    const handleProfileUpload = async (event) => {

        event.preventDefault()

        if (!selectedEmployeeId || !profileFile) {

            setMessage(
                "Select an employee and choose a profile image first."
            )

            return
        }

        setIsUploading(true)
        setMessage("")

        try {

            await uploadProfileImage(
                selectedEmployeeId,
                profileFile
            )

            setProfileFile(null)

            event.target.reset()

            setMessage(
                "Profile image updated successfully."
            )

        } catch (error) {

            console.log(error)

            setMessage(
                "Profile image upload failed. Please try again."
            )

        } finally {

            setIsUploading(false)
        }
    }

    return (

        <div className="pb-12 text-white">

            <section
                className="
                    relative
                    min-h-[320px]
                    overflow-hidden
                    rounded-[32px]
                    border
                    border-white/10
                    bg-slate-950
                    shadow-2xl
                    shadow-black/30
                "
            >

                <img
                    src={HERO_IMAGE}
                    alt="Enterprise HR document operations"
                    className="
                        absolute
                        inset-0
                        h-full
                        w-full
                        object-cover
                        opacity-45
                    "
                />

                <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-slate-950/30" />

                <div
                    className="
                        relative
                        z-10
                        grid
                        min-h-[320px]
                        grid-cols-1
                        gap-8
                        p-8
                        lg:grid-cols-[1.2fr_0.8fr]
                        lg:p-10
                    "
                >

                    <div className="flex max-w-3xl flex-col justify-center">

                        <div
                            className="
                                mb-5
                                flex
                                w-fit
                                items-center
                                gap-2
                                rounded-full
                                border
                                border-cyan-300/30
                                bg-cyan-400/10
                                px-4
                                py-2
                                text-xs
                                font-bold
                                uppercase
                                tracking-wide
                                text-cyan-200
                            "
                        >
                            <FaShieldAlt />
                            Secure HR Document Center
                        </div>

                        <h1
                            className="
                                max-w-2xl
                                text-4xl
                                font-bold
                                leading-tight
                                tracking-tight
                                text-white
                                lg:text-5xl
                            "
                        >
                            Employee records, identity files,
                            and profile images in one controlled workspace.
                        </h1>

                        <p
                            className="
                                mt-5
                                max-w-2xl
                                text-sm
                                leading-6
                                text-slate-300
                            "
                        >
                            Upload employee documents, update profile images,
                            and open files directly from the HRMS document
                            repository.
                        </p>

                    </div>

                    <div
                        className="
                            grid
                            content-end
                            gap-4
                            sm:grid-cols-3
                            lg:grid-cols-1
                        "
                    >

                        <MetricTile
                            label="Employees"
                            value={employees.length}
                            icon={<FaUserTie />}
                        />

                        <MetricTile
                            label="Visible Files"
                            value={documents.length}
                            icon={<FaFolderOpen />}
                        />

                        <MetricTile
                            label="Active Vault"
                            value="Live"
                            icon={<FaShieldAlt />}
                        />

                    </div>

                </div>

            </section>

            <section
                className="
                    mt-8
                    grid
                    grid-cols-1
                    gap-6
                    xl:grid-cols-[360px_1fr]
                "
            >

                <aside className="space-y-6">

                    <Panel>

                        <div className="mb-5">

                            <p className="text-xs font-bold uppercase tracking-wide text-cyan-300">
                                Employee Scope
                            </p>

                            <h2 className="mt-2 text-2xl font-bold">
                                Select employee
                            </h2>

                        </div>

                        <select
                            value={selectedEmployeeId}
                            onChange={(event) =>
                                setSelectedEmployeeId(
                                    event.target.value
                                )
                            }
                            className="
                                h-12
                                w-full
                                rounded-xl
                                border
                                border-slate-700
                                bg-slate-950
                                px-4
                                text-sm
                                text-white
                                outline-none
                                transition
                                focus:border-cyan-400/70
                                focus:ring-2
                                focus:ring-cyan-400/20
                            "
                        >
                            {employees.map((employee) => (

                                <option
                                    key={employee.id}
                                    value={employee.id}
                                >
                                    {employee.firstName}
                                    {" "}
                                    {employee.lastName}
                                    {" - "}
                                    {employee.department || "Department"}
                                </option>
                            ))}
                        </select>

                        {selectedEmployee && (

                            <div
                                className="
                                    mt-5
                                    flex
                                    items-center
                                    gap-4
                                    rounded-2xl
                                    border
                                    border-slate-700/80
                                    bg-slate-950/70
                                    p-4
                                "
                            >

                                <div
                                    className="
                                        flex
                                        h-12
                                        w-12
                                        items-center
                                        justify-center
                                        rounded-2xl
                                        bg-cyan-400/15
                                        text-lg
                                        font-bold
                                        text-cyan-200
                                    "
                                >
                                    {selectedEmployee.firstName?.charAt(0) || "E"}
                                    {selectedEmployee.lastName?.charAt(0) || ""}
                                </div>

                                <div className="min-w-0">

                                    <h3 className="truncate text-sm font-bold">
                                        {selectedEmployee.firstName}
                                        {" "}
                                        {selectedEmployee.lastName}
                                    </h3>

                                    <p className="truncate text-xs text-slate-400">
                                        {selectedEmployee.email || "employee@company.com"}
                                    </p>

                                </div>

                            </div>
                        )}

                    </Panel>

                    <ImagePanel
                        image={AUDIT_IMAGE}
                        title="Compliance Ready"
                        text="Keep employment files and identity records easy to review."
                    />

                    <ImagePanel
                        image={VAULT_IMAGE}
                        title="Enterprise Workspace"
                        text="Designed for HR teams that manage records every day."
                    />

                </aside>

                <div className="space-y-6">

                    <div
                        className="
                            grid
                            grid-cols-1
                            gap-6
                            lg:grid-cols-2
                        "
                    >

                        <UploadPanel
                            title="Upload document"
                            description="Attach contracts, certificates, IDs, and policy acknowledgements."
                            icon={<FaCloudUploadAlt />}
                            accept=".pdf,.doc,.docx,.png,.jpg,.jpeg"
                            buttonText="Upload Document"
                            file={documentFile}
                            isUploading={isUploading}
                            onFileChange={setDocumentFile}
                            onSubmit={handleDocumentUpload}
                        />

                        <UploadPanel
                            title="Profile image"
                            description="Update employee profile photos used across the HRMS."
                            icon={<FaImage />}
                            accept="image/png,image/jpeg,image/jpg"
                            buttonText="Update Image"
                            file={profileFile}
                            isUploading={isUploading}
                            onFileChange={setProfileFile}
                            onSubmit={handleProfileUpload}
                        />

                    </div>

                    {message && (

                        <div
                            className="
                                rounded-2xl
                                border
                                border-cyan-300/20
                                bg-cyan-400/10
                                px-5
                                py-4
                                text-sm
                                font-semibold
                                text-cyan-100
                            "
                        >
                            {message}
                        </div>
                    )}

                    <Panel>

                        <div
                            className="
                                mb-6
                                flex
                                flex-col
                                gap-4
                                lg:flex-row
                                lg:items-center
                                lg:justify-between
                            "
                        >

                            <div>

                                <p className="text-xs font-bold uppercase tracking-wide text-cyan-300">
                                    Repository
                                </p>

                                <h2 className="mt-2 text-2xl font-bold">
                                    Employee documents
                                </h2>

                            </div>

                            <div className="relative w-full lg:w-80">

                                <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-sm text-slate-500" />

                                <input
                                    type="text"
                                    placeholder="Search documents..."
                                    value={searchTerm}
                                    onChange={(event) =>
                                        setSearchTerm(event.target.value)
                                    }
                                    className="
                                        h-11
                                        w-full
                                        rounded-xl
                                        border
                                        border-slate-700
                                        bg-slate-950
                                        pl-11
                                        pr-4
                                        text-sm
                                        text-white
                                        outline-none
                                        transition
                                        placeholder:text-slate-500
                                        focus:border-cyan-400/70
                                        focus:ring-2
                                        focus:ring-cyan-400/20
                                    "
                                />

                            </div>

                        </div>

                        {isLoading ? (

                            <EmptyState
                                title="Loading employee documents"
                                text="Fetching the latest files from the repository."
                            />

                        ) : filteredDocuments.length > 0 ? (

                            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">

                                {filteredDocuments.map((document) => (

                                    <DocumentCard
                                        key={document.id}
                                        document={document}
                                    />
                                ))}

                            </div>

                        ) : (

                            <EmptyState
                                title="No documents found"
                                text="Upload the first file for this employee to start building their HR record."
                            />
                        )}

                    </Panel>

                </div>

            </section>

        </div>
    )
}

function Panel({ children }) {

    return (

        <div
            className="
                rounded-[28px]
                border
                border-slate-700/80
                bg-slate-900/70
                p-6
                shadow-xl
                shadow-black/20
                backdrop-blur-xl
            "
        >
            {children}
        </div>
    )
}

function MetricTile({
    label,
    value,
    icon
}) {

    return (

        <div
            className="
                rounded-2xl
                border
                border-white/10
                bg-white/10
                p-4
                backdrop-blur-md
            "
        >

            <div className="mb-3 text-cyan-200">
                {icon}
            </div>

            <p className="text-2xl font-bold">
                {value}
            </p>

            <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-slate-300">
                {label}
            </p>

        </div>
    )
}

function UploadPanel({
    title,
    description,
    icon,
    accept,
    buttonText,
    file,
    isUploading,
    onFileChange,
    onSubmit
}) {

    return (

        <Panel>

            <form
                onSubmit={onSubmit}
                className="space-y-5"
            >

                <div className="flex items-start gap-4">

                    <div
                        className="
                            flex
                            h-12
                            w-12
                            shrink-0
                            items-center
                            justify-center
                            rounded-2xl
                            bg-cyan-400/15
                            text-xl
                            text-cyan-200
                        "
                    >
                        {icon}
                    </div>

                    <div>

                        <h3 className="text-xl font-bold">
                            {title}
                        </h3>

                        <p className="mt-1 text-sm leading-6 text-slate-400">
                            {description}
                        </p>

                    </div>

                </div>

                <label
                    className="
                        flex
                        min-h-[130px]
                        cursor-pointer
                        flex-col
                        items-center
                        justify-center
                        rounded-2xl
                        border
                        border-dashed
                        border-slate-600
                        bg-slate-950/70
                        px-5
                        text-center
                        transition
                        hover:border-cyan-300/70
                        hover:bg-cyan-400/5
                    "
                >

                    <FaCloudUploadAlt className="mb-3 text-3xl text-cyan-300" />

                    <span className="text-sm font-bold text-white">
                        {file?.name || "Choose a file"}
                    </span>

                    <span className="mt-1 text-xs text-slate-500">
                        PDF, document, or image files
                    </span>

                    <input
                        type="file"
                        accept={accept}
                        onChange={(event) =>
                            onFileChange(
                                event.target.files?.[0] || null
                            )
                        }
                        className="hidden"
                    />

                </label>

                <button
                    type="submit"
                    disabled={isUploading}
                    className="
                        flex
                        h-12
                        w-full
                        items-center
                        justify-center
                        gap-2
                        rounded-xl
                        bg-cyan-400
                        text-sm
                        font-bold
                        text-slate-950
                        transition
                        hover:bg-cyan-300
                        disabled:cursor-not-allowed
                        disabled:opacity-60
                    "
                >
                    {isUploading ? "Uploading..." : buttonText}
                    <FaArrowRight />
                </button>

            </form>

        </Panel>
    )
}

function DocumentCard({ document }) {

    const fileName =
        document.fileName || "Untitled document"

    const fileType =
        document.fileType || "application/octet-stream"

    return (

        <article
            className="
                rounded-2xl
                border
                border-slate-700/80
                bg-slate-950/70
                p-5
                transition
                hover:border-cyan-300/50
                hover:bg-slate-950
            "
        >

            <div className="flex items-start gap-4">

                <div
                    className="
                        flex
                        h-12
                        w-12
                        shrink-0
                        items-center
                        justify-center
                        rounded-2xl
                        bg-white/5
                        text-xl
                        text-cyan-200
                    "
                >
                    {getFileIcon(fileType)}
                </div>

                <div className="min-w-0 flex-1">

                    <h3 className="truncate text-sm font-bold text-white">
                        {fileName}
                    </h3>

                    <p className="mt-1 truncate text-xs font-semibold uppercase tracking-wide text-slate-500">
                        {fileType}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-2">

                        <a
                            href={getDocumentViewUrl(document.id)}
                            target="_blank"
                            rel="noreferrer"
                            className="
                                flex
                                h-9
                                items-center
                                gap-2
                                rounded-lg
                                bg-cyan-400/10
                                px-3
                                text-xs
                                font-bold
                                text-cyan-200
                                transition
                                hover:bg-cyan-400/20
                            "
                        >
                            <FaEye />
                            View
                        </a>

                        <a
                            href={getDocumentDownloadUrl(document.id)}
                            className="
                                flex
                                h-9
                                items-center
                                gap-2
                                rounded-lg
                                bg-white/5
                                px-3
                                text-xs
                                font-bold
                                text-slate-200
                                transition
                                hover:bg-white/10
                            "
                        >
                            <FaDownload />
                            Download
                        </a>

                    </div>

                </div>

            </div>

        </article>
    )
}

function ImagePanel({
    image,
    title,
    text
}) {

    return (

        <div
            className="
                relative
                min-h-[180px]
                overflow-hidden
                rounded-[28px]
                border
                border-white/10
                bg-slate-950
                p-5
                shadow-xl
                shadow-black/20
            "
        >

            <img
                src={image}
                alt={title}
                className="absolute inset-0 h-full w-full object-cover opacity-45"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/65 to-transparent" />

            <div className="relative z-10 flex h-full min-h-[140px] flex-col justify-end">

                <h3 className="text-lg font-bold">
                    {title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-300">
                    {text}
                </p>

            </div>

        </div>
    )
}

function EmptyState({
    title,
    text
}) {

    return (

        <div
            className="
                flex
                min-h-[260px]
                flex-col
                items-center
                justify-center
                rounded-2xl
                border
                border-dashed
                border-slate-700
                bg-slate-950/60
                px-6
                text-center
            "
        >

            <div
                className="
                    mb-4
                    flex
                    h-16
                    w-16
                    items-center
                    justify-center
                    rounded-2xl
                    bg-cyan-400/10
                    text-2xl
                    text-cyan-200
                "
            >
                <FaIdBadge />
            </div>

            <h3 className="text-lg font-bold">
                {title}
            </h3>

            <p className="mt-2 max-w-md text-sm leading-6 text-slate-400">
                {text}
            </p>

        </div>
    )
}

function getFileIcon(fileType) {

    if (fileType.includes("pdf")) {

        return <FaFilePdf />
    }

    if (fileType.includes("image")) {

        return <FaFileImage />
    }

    return <FaFileAlt />
}

export default DocumentsPage
